import React, { Component } from 'react'
import PropTypes from 'prop-types';

import ListItem from './ListItem';


class List extends Component {
  render() {
    const listItems = this.props.listItems;
    return (
      <div>
        {listItems.map((item) => {
          return <ListItem
            key={item.key}
            id={item.key}
            itemText={item.text}
            deleteItem={this.props.deleteItem}
            updateItem={this.props.updateItem}
          />
        })}
      </div>
    )
  }
}

List.propTypes = {
  listItems: PropTypes.array,
  deleteItem: PropTypes.func,
  updateItem: PropTypes.func,
};

export default List;
