import React, { Component } from 'react'
import PropTypes from 'prop-types';

import '../assets/styles/SearchTodo.css';

export class SearchTodo extends Component {
  render() {
    const { searchHandler, searchInput, placeholderValue } = this.props;
    return (
      <div>
        <input
          className="search-bar"
          type="text"
          onChange={searchHandler}
          value={searchInput}
          placeholder={placeholderValue}
        />
      </div>
    )
  }
}
SearchTodo.propTypes = {
  searchHandler: PropTypes.func,
  searchInput: PropTypes.string,
  placeholderValue: PropTypes.string
};

export default SearchTodo
