import React from 'react';
import { ICard } from './types';

class Card extends React.Component<ICard> {
  constructor(props: ICard) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <img src={this.props.imgSrc} alt="" />
        <span className="card-title">{this.props.title}</span>
        <span className="card-description">{this.props.description}</span>
      </div>
    );
  }
}

export default Card;
