import React from 'react';
import { LSKey } from '@/constants';
import './style.css';

class SearchBar extends React.Component {
  state = {
    searchQuery: '',
  };

  test(): unknown {
    console.log(this.state);
    return this.state;
  }

  componentDidMount(): void {
    const savedQuery = localStorage.getItem(LSKey) || '';
    if (savedQuery) {
      this.setQuery(savedQuery);
    }
  }
  componentWillUnmount(): void {
    // const test = this.test.bind(this);
    // console.log('unmount');
    alert(JSON.stringify(this.state));
    // setTimeout(() => {
    // console.log('unmount', this.test());
    // alert(this.state.searchQuery);
    localStorage.setItem(LSKey, this.state.searchQuery);
    // }, 0);
  }
  setQuery(val: string) {
    this.setState({ searchQuery: val });
    console.log(this.state);
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
