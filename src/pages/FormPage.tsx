import React from 'react';
import { FormState } from '@/types';
import CardFromForm from '@/components/CardFromForm/CardFromForm';
import Form from '@/components/Form/Form';
import { TIMEOUT } from '@/constants';

class FormPage extends React.Component {
  state = {
    cards: [],
    noticeVisible: false,
  };

  onSubmit = (formState: FormState) => {
    this.setState({ cards: [...this.state.cards, formState] });
    this.showNotice();
  };

  showNotice = () => {
    this.setState({ noticeVisible: true });
    setTimeout(() => {
      this.setState({ noticeVisible: false });
    }, TIMEOUT);
  };

  render() {
    const cardList = this.state.cards.map((card, index) => {
      return <CardFromForm formState={card} key={index} />;
    });
    const noticeStyle = this.state.noticeVisible ? { display: 'block' } : { display: 'none' };
    return (
      <div>
        <Form onSubmit={this.onSubmit} />
        <div className="notice-wrapper" style={noticeStyle}>
          Form data is added!
        </div>
        <div className="cards-wrapper cards-grid">{cardList}</div>
      </div>
    );
  }
}

export default FormPage;
