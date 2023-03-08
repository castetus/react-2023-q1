import React from 'react';
import { LSKey } from '@/constants';
import './style.css';

class SearchBar extends React.Component {
  state = {
    searchQuery: '',
  };

  componentDidMount(): void {
    try {
      const savedQuery = localStorage.getItem(LSKey) || '';
      this.setQuery(savedQuery);
    } catch (error) {
      console.log(error);
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
