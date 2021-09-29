import React, { Component } from 'react'

import ListItem from './ListItem';
import ListHeader from './ListHeader';

class List extends Component {
  render() {
    const listItems = this.props.listItems;
    return (
      <div>
        <ListHeader />
        {listItems.map((item) => {
          return <ListItem
            key={item.key}
            itemText={item.text}
          />
        })}
      </div>
    )
  }
}

export default List;
