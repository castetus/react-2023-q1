import { FormState } from '@/types';
import React from 'react';
import './style.css';

interface Props {
  formState: FormState;
}

class CardFromForm extends React.Component<Props> {
  render() {
    const { name, birthdate, country, confirm, sex, profilePicture } = this.props.formState;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{birthdate}</h6>
          <p className="card-text">{country}</p>
          <p className="card-text">{confirm ? 'Confirmed' : 'Not confirmed'}</p>
          <p className="card-text">{sex}</p>
          {profilePicture && <img className="card-img-top" src={profilePicture} alt="Profile" />}
        </div>
      </div>
    );
  }
}

export default CardFromForm;
