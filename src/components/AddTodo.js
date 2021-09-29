import React, { Component } from 'react';

class AddTodo extends Component {

  render() {
    const { inputText, handleChange, addItem } = this.props;
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
            placeholder="Enter Todo"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default AddTodo;
