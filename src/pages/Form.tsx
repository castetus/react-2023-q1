import React from 'react';

class About extends React.Component {
  submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('submitHandler');
  }
  render() {
    return (
      <div>
        <h1>Form</h1>
        <form className="form" onSubmit={(e) => this.submitHandler(e)}>
          <label htmlFor="name">
            Name
            <input type="text" name="name" />
          </label>
          <label htmlFor="birthdate">
            Birthdate
            <input type="date" name="birthdate" />
          </label>
          <label htmlFor="country">
            Country
            <select name="country" id="">
              <option value="1">USA</option>
              <option value="2">Canada</option>
            </select>
          </label>
          <label htmlFor="confirm">
            I confirm that I agree to sell my soul to the devil
            <input type="checkbox" name="confirm" />
          </label>
          <label htmlFor="male">
            Male
            <input type="radio" name="sex" id="male" value="male" />
          </label>
          <label htmlFor="female">
            Female
            <input type="radio" name="sex" id="female" value="female" />
          </label>
          <label htmlFor="">
            <input type="file" name="" id="" />
          </label>
          <input type="submit" value="Send form" />
        </form>
      </div>
    );
  }
}

export default About;
