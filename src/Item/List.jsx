import React from "react";
import ObjectId from "bson-objectid";

class List extends React.Component {

	add() {
		this.setState({
			adding: true
		})
	}

	addToList(item) {
		let list = [...this.state.list, item];
		this.setState({
			list,
			adding: false
		});
		this.props.onListChange(list);
	}

	buttonEditOrNothing(buttonName, editor) {
		let {allowEditing, adding}       = this.state;
		if (allowEditing) {
			if (adding) {
				return editor

			} else {
				return <button type="button" class="btn btn-default btn-xs" onClick={this.add.bind(this)}>
					<span
							class="glyphicon glyphicon-plus"
							aria-hidden="true"/>{buttonName}
				</button>
			}
		} else {
			return "";
		}
	}

	componentWillMount() {
		this.propsToState(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.propsToState(nextProps);
	}

	constructor(props) {
		super(props);
		this.state = {
			adding: false,
			allowEditing: false,
		}
	}

	propsToState(props) {
		let {list, adding, allowEditing}  = props;
		this.setState({
			list,
			adding,
			allowEditing
		});
	}

	removeItem(item) {
		let list = this.state.list.filter((r) => this.itemEqualsItem(r, item));
		this.setState({
			list
		});
		this.props.onListChange(list);
	}

	itemEqualsItem(left, right) {
		return left === right;
	}

	updateItem(item) {
		let index              = this.state.list.findIndex((r) => this.itemEqualsItem(item, r));
		this.state.list[index] = item;
		this.setState({
			list: this.state.list
		});
		this.props.onListChange(this.state.list);
	}
}

export default List;
