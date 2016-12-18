import {PageHeader} from "bootstrap-react-components";
import React from "react";

class Editor extends React.Component {

	cancel() {
		this.props.cancel();
	}

	componentWillMount() {
		this.propsToState(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.propsToState(nextProps);
	}


	propsToState(props) {
		this.setState({
			...props
		});
	}

	render() {
		return (
				<div id="EditorPage">
					<PageHeader id="Editor">
						<h1>Editor</h1>
					</PageHeader>
				</div>
		);
	}

	save(event) {
		event.preventDefault();
		this.props.save(this.stateToItem());
	}

	stateToItem() {
		return this.state;
	}

}

export default Editor;