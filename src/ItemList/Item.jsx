import {PageHeader} from "bootstrap-react-components";
import React from "react";

class Item extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			editing: false,
			allowEditing: false
		}
	}

	componentWillMount() {
		this.propsToState(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.propsToState(nextProps);
	}

	editing(e) {
		this.setState({
			editing: true
		});
	}

	editor(item) {
		return "";
	}

	propsToState(props) {
		let {allowEditing, editing, item}                 = props;
		this.setState({
			allowEditing,
			editing,
			item
		});
	}

	remove() {
		this.props.remove(this.state.item);
	}

	render() {
		let {item, editing, allowEditing} = this.state;
		let element                       = (editing && allowEditing) ? this.editor(item) : this.viewer(item);
		return element;
	}

	save(item) {
		this.setState({
			editing: false
		});
		this.props.save(item);
	}

	viewer(item) {
		return "";
	}
}

export default Item;
