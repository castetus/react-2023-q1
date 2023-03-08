import React from 'react';
import SearchBar from '@/components/SearchBar/SearchBar';
import Card from '@/components/Card/Card';
import { cardsData } from '@/cards';

class Home extends React.Component {
  state = {
    cards: cardsData,
  };
  render() {
    return (
      <div className="page-wrapper">
        <SearchBar />
        <div className="cards-grid">
          {this.state.cards.map((card, i) => (
            <Card data={card.data} key={i} />
          ))}
        </div>
      </div>
    );
  }
}
export default Home;
