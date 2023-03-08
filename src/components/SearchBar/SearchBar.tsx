import React from 'react';
import { LSKey } from '@/constants';
import './style.css';

class SearchBar extends React.Component {
  state = {
    searchQuery: '',
  };

  componentDidMount(): void {
    const savedQuery = localStorage.getItem(LSKey) || '';
    if (savedQuery) {
      this.setQuery(savedQuery);
    }
  }
  componentWillUnmount(): void {
    localStorage.setItem(LSKey, this.state.searchQuery);
  }
  setQuery(val: string) {
    this.setState({ searchQuery: val });
  }
  render() {
    return (
      <div className="search-bar">
        <input
          className="search-bar-textfield"
          onChange={(e) => this.setQuery(e.target.value)}
          type="text"
          value={this.state.searchQuery}
        />
        <span className="search-bar-icon" />
      </div>
    );
  }
}

export default SearchBar;
