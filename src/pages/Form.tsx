import React from 'react';
import { FormState } from '@/types';
import { validate } from '@/helpers/validate';

class Form extends React.Component {
  state: FormState = {
    name: '',
    birthdate: '',
    country: '',
    confirm: false,
    sex: '',
    file: null,
    errors: {},
  };
  submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(this.state);
    this.setState({ errors });
  };
  changeHandle = (
    e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>
  ) => {
    const target = e.target;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        <h1>Form</h1>
        <form className="form" onSubmit={(e) => this.submitHandler(e)}>
          <label htmlFor="name">
            Name
            <input type="text" name="name" onChange={this.changeHandle} value={this.state.name} />
          </label>
          <label htmlFor="birthdate">
            Birthdate
            <input
              type="date"
              name="birthdate"
              value={this.state.birthdate}
              onChange={this.changeHandle}
            />
          </label>
          <label htmlFor="country">
            Country
            <select name="country" id="" value={this.state.country} onChange={this.changeHandle}>
              <option value="0"></option>
              <option value="1">USA</option>
              <option value="2">Canada</option>
            </select>
          </label>
          <label htmlFor="confirm">
            I confirm that I agree to sell my soul to the devil
            <input
              type="checkbox"
              name="confirm"
              // checked={this.state.confirm}
              onChange={(e) => this.setState({ confirm: e.target.checked })}
            />
          </label>
          <label htmlFor="male">
            Male
            <input
              type="radio"
              name="sex"
              id="male"
              value="male"
              checked={this.state.sex === 'male'}
              onChange={this.changeHandle}
            />
          </label>
          <label htmlFor="female">
            Female
            <input
              type="radio"
              name="sex"
              id="female"
              value="female"
              checked={this.state.sex === 'female'}
              onChange={this.changeHandle}
            />
          </label>
          <label htmlFor="">
            <input type="file" name="file" id="" onChange={this.changeHandle} />
          </label>
          <input type="submit" value="Send form" />
        </form>
      </div>
    );
  }
}

export default Form;
