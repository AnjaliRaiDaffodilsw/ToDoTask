import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/AddTodo.css';

class AddTodo extends Component {

  render() {
    const { inputText, handleChange, addItem, placeholderValue } = this.props;
    return (
      <div>
        <form
          className="to-do-form"
          onSubmit={addItem}
        >
          <input
            type="text"
            value={inputText}
            onChange={handleChange}
            placeholder={placeholderValue}
          />
          <button type="submit">+</button>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  inputText: PropTypes.string,
  placeholderValue: PropTypes.string,
  handleChange: PropTypes.func,
  addItem: PropTypes.func,
};

export default AddTodo;
