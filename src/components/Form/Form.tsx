import React from 'react';
import { FormState, FormProps } from '@/types';
import { validate } from '@/helpers/validate';
import './style.css';

class Form extends React.Component<FormProps> {
  constructor(props: FormProps) {
    super(props);
  }
  state: FormState = {
    name: '',
    birthdate: '',
    country: '',
    confirm: false,
    sex: '',
    profilePicture: null,
    errors: {},
  };
  submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(this.state);
    this.setState({ errors });
    if (Object.keys(errors).length) {
      return;
    }
    this.props.onSubmit(this.state);
    const form = e.target as HTMLFormElement;
    form.reset();
    this.setState({
      name: '',
      birthdate: '',
      country: '',
      confirm: false,
      sex: '',
      profilePicture: null,
      errors: {},
    });
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
  handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        this.setState({ profilePicture: event.target?.result?.toString() });
      };
      reader.readAsDataURL(file);
    }
  };
  render() {
    const { name, birthdate, country, errors } = this.state;
    return (
      <div>
        <h1>Form</h1>
        <form className="form" onSubmit={(e) => this.submitHandler(e)}>
          <label htmlFor="name">
            Name
            <input type="text" name="name" onChange={this.changeHandle} value={name} />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
          <label htmlFor="birthdate">
            Birthdate
            <input type="date" name="birthdate" value={birthdate} onChange={this.changeHandle} />
            {errors.birthdate && <span className="error">{errors.birthdate}</span>}
          </label>
          <label htmlFor="country">
            Country
            <select name="country" id="" value={country} onChange={this.changeHandle}>
              <option value="0"></option>
              <option value="1">USA</option>
              <option value="2">Canada</option>
            </select>
            {errors.country && <span className="error">{errors.country}</span>}
          </label>
          <label htmlFor="confirm">
            I confirm that I agree to sell my soul to the devil
            <input
              type="checkbox"
              name="confirm"
              checked={this.state.confirm}
              onChange={(e) => this.setState({ confirm: e.target.checked })}
            />
            {errors.confirm && <span className="error">{errors.confirm}</span>}
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
            {errors.sex && <span className="error">{errors.sex}</span>}
          </label>
          <label htmlFor="">
            <input
              type="file"
              accept="image/png, image/jpeg"
              name="profilePicture"
              id=""
              onChange={this.handleFileUpload}
            />
            {errors.profilePicture && <span className="error">{errors.profilePicture}</span>}
          </label>
          <input type="submit" value="Send form" />
        </form>
      </div>
    );
  }
}

export default Form;
