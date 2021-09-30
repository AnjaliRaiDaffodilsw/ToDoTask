import React, { Component } from 'react';

import AddTodo from './AddTodo';
import List from './List';
import SearchTodo from './SearchTodo';
import ListHeader from './ListHeader';

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [
        { text: 'Learn JavaScript', key: 1 },
        { text: 'Learn React', key: 2 },
        { text: 'Play around in JS', key: 3 },
        { text: 'Build something Great', key: 4 }
      ],
      currentItem: {
        text: '',
        key: null
      },
      searchInput: '',
      filteredItem: [
        { text: 'Learn JavaScript', key: 1 },
        { text: 'Learn React', key: 2 },
        { text: 'Play around in JS', key: 3 },
        { text: 'Build something Great', key: 4 }
      ],
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
          key: null
        }
      })
    }
  }

  deleteItem = (key) => {
    const remainingItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: remainingItems,
      filteredItem: remainingItems
    });
  }

  updateItem = (textValue, keys) => {
    this.genericFunction((objKey) => objKey === keys, (obj) => Object.assign(obj, { text: textValue }), textValue, keys)
  }

  genericFunction = (comparableFunc, assigningFunc, textValue, keys) => {
    this.setState(prevState => ({
      items: prevState.items.map(
        obj => (comparableFunc(obj.key, keys) ? assigningFunc(obj, textValue) : obj)
      )
    }));
  }

  searchHandler = (event) => {
    this.setState({
      searchInput: event.target.value
    });
    const res = this.state.items.filter(item => {
      return item.text.toLocaleLowerCase().includes(this.state.searchInput);
    });
    this.setState({ filteredItem: res });
  }

  render() {
    const { searchInput, filteredItem, items } = this.state;
    return (
      <div>
        <ListHeader />
        <SearchTodo
          searchHandler={this.searchHandler}
          searchInput={searchInput}
          placeholderValue={"Search Todo"}
        />
        < AddTodo
          inputText={this.state.currentItem.text}
          handleChange={this.handleChange}
          addItem={this.addItem}
          placeholderValue={"Add Todo"}
        />
        <List
          listItems={this.state.searchInput ? filteredItem : items}
          deleteItem={this.deleteItem}
          updateItem={this.updateItem}
        />
      </div>
    )
  }
}

export default Todo;