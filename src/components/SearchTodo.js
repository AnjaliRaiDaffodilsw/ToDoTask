import React, { Component } from 'react'
import PropTypes from 'prop-types';

import '../assets/styles/SearchTodo.css';

export class SearchTodo extends Component {
  render() {
    const { searchHandler, searchInput } = this.props;
    return (
      <div>
        <input
          className="search-bar"
          type="text"
          onChange={searchHandler}
          value={searchInput}
          placeholder="Search Todo"
        />
      </div>
    )
  }
}
SearchTodo.propTypes = {
  searchHandler: PropTypes.func,
  searchInput: PropTypes.string,
};

export default SearchTodo
