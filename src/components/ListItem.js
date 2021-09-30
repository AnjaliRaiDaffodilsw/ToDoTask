import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

import '../assets/styles/ListItem.css';

class ListItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputText: this.props.itemText,
      onSave: false
    }
  }
  render() {
    const { itemText, id } = this.props;
    return (
      <div className="list">
        {
          this.state.onSave ?
            <button className="editable-button">
              <input
                id={id}
                type="text"
                value={this.state.inputText}
                onChange={(event) => {
                  this.setState({
                    inputText: event.target.value,
                  });
                }}
                autoComplete="off"
                className="input-field"
              />
            </button>
            : <button
              className="editable-button"
              onClick={() => this.setState({
                onSave: !this.state.onSave
              })}>
              <p className="non-editable-input">{itemText}</p>
            </button>
        }
        <div className="buttons-container">
          {
            this.state.onSave
            && 
            <button
              onClick={() => this.setState({
                onSave: !this.state.onSave
              },
                () => this.props.updateItem(this.state.inputText, id))
              }
              className="save-button">
              Save
              </button>
          }
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => this.props.deleteItem(id)} />
          </span>
        </div>
      </div >
    )
  }
}

ListItem.propTypes = {
  itemText: PropTypes.string,
  id: PropTypes.number,
  deleteItem: PropTypes.func,
  updateItem: PropTypes.func,
};

export default ListItem;
