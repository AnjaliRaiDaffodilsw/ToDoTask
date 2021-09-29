import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

import '../assets/styles/ListItem.css';

class ListItem extends Component {
  render() {
    const { itemText, id } = this.props;
    return (
      <div className="list">
        <p>{itemText}
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => this.props.deleteItem(id)} />
          </span>
        </p>
      </div>
    )
  }
}

ListItem.propTypes = {
  itemText: PropTypes.string,
  id: PropTypes.string,
  deleteItem: PropTypes.func,
};

export default ListItem;
