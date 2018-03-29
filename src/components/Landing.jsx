import React, { Component } from 'react';

class Landing extends Component {
// Add some state, either showing the login or the sign up, which are essentially the same..
  componentDidMount() {
    fetch('/ping')
      .then(resp => resp.json())
      .then(resp => console.log(resp.data));
  }

  render() {
    return (
      <section className="landing">
        <div className="landing__logo">Logo</div>
        <div className="landing__title">Welcome to Finterest</div>
        <div className="landing__sub">Find new ideas to try</div>
        <div className="landing__form">
          <input type="text" className="form__email" placeholder="Email" />
          <input type="password" className="form__password" placeholder="Create a password" />
          <button type="button" className="form__login">Continue</button>
        </div>
      </section>
    );
  }
}
export default Landing;

