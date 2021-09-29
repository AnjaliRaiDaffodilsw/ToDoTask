import React, { Component } from 'react';

import '../assets/styles/ListItem.css';

class ListItem extends Component {
	render() {
		const { itemText } = this.props;
		return (
			<div className="list">
				<p>{itemText}</p>
			</div>
		)
	}
}

export default ListItem;
