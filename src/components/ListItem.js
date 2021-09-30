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
          this.state.onSave ? <input
            id={id}
            type="text"
            value={this.state.inputText}
            onChange={(event) => {
              this.setState({
                inputText: event.target.value,
              });
            }}
            className="input-field"
          />
            : <p className="non-editable-input">{itemText}</p>
        }
        <div className="buttons-container">
          <button
            className={`${this.state.onSave ? 'save-button' : 'edit-button'}`}
            onClick={() => {
              this.setState({
                onSave: !this.state.onSave
              },
                () => !this.state.onSave
                  && this.props.updateItem(this.state.inputText, id))
            }}>{this.state.onSave ? "Save" : "Edit"}</button>
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
