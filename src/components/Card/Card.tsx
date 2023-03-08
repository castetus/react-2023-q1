import React from 'react';
import { ICard } from './types';
import './style.css';

class Card extends React.Component<ICard> {
  constructor(props: ICard) {
    super(props);
    this.loadImage();
  }
  state = {
    url: '',
  };
  loadImage() {
    import(`../../assets/images/${this.props.data.imgSrc}.jpg`).then((image) => {
      this.setState({ url: image.default });
    });
  }
  render() {
    return (
      <div className="card">
        {this.state.url && <img src={this.state.url} alt="" />}
        <h3 className="card-title">{this.props.data.title}</h3>
        <span className="card-description">{this.props.data.description}</span>
      </div>
    );
  }
}

export default Card;
