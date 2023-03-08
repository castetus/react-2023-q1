import React from 'react';
import SearchBar from '@/components/SearchBar/SearchBar';
import { ICard } from '@/components/Card/types';
import Card from '@/components/Card/Card';

const testCard = {
  data: {
    imgSrc: 'boot',
    title: 'title1',
    description: 'description1',
  },
} as ICard;

class Home extends React.Component {
  render() {
    return (
      <div className="page-wrapper">
        <SearchBar />
        <Card data={testCard.data} />
      </div>
    );
  }
}
export default Home;
