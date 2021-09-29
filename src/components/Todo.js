import React, { Component } from 'react';

import AddTodo from './AddTodo';

import List from './List';

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [
        { text: 'Learn JavaScript', key: '1' },
        { text: 'Learn React', key: '2' },
        { text: 'Play around in JSFiddle', key: '3' },
        { text: 'Build something awesome', key: '4' }
      ],
      currentItem: {
        text: '',
        key: ''
      },
    }
  }

  handleChange = (event) => {
    this.setState({
      currentItem: {
        text: event.target.value,
        key: Math.random()
      }
    })
  }

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  render() {
    return (
      <div>
        <AddTodo
          inputText={this.state.currentItem.text}
          handleChange={this.handleChange}
          addItem={this.addItem}
        />
        <List
          listItems={this.state.items}
        />
       
      </div>
    )
  }
}

export default Todo;