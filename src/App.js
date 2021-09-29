import React, { Component } from 'react';

import Todo from './components/Todo';
import './App.css';
import './ImportFontFiles';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    )
  }
}

export default App;
