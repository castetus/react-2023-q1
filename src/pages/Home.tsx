import React from 'react';
import SearchBar from '@/components/SearchBar/SearchBar';

class Home extends React.Component {
  render() {
    return (
      <div className="page-wrapper">
        <SearchBar />
      </div>
    );
  }
}
export default Home;
