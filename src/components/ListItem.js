import React, { Component } from 'react';

class ListItem extends Component {
	render() {
		const { itemText } = this.props;
		return (
			<div>
				<p>{itemText}</p>
			</div>
		)
	}
}

export default ListItem;
