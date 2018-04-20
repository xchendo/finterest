import React, { Component } from 'react';
import axios from 'axios';

class Landing extends Component {
// Add some state, either showing the login or the sign up, which are essentially the same..
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  // componentDidMount() {
  //   fetch('/ping')
  //     .then(resp => resp.json())
  //     .then(resp => console.log(resp.data));
  // }

  async onSubmit(e) {
    e.preventDefault();
    // formData seems to be bs man..
    //const data = new FormData(e.target);
    // const resp = await fetch('/api/user/create', {
    //   method: 'POST',
    //   body: {
    //     email: document.getElementsByClassName('form__email')[0].value,
    //     password: document.getElementsByClassName('form__password')[0].value,
    //   }
    // });

    // const json = await resp.json();
    // console.log(json);
    axios.post('/api/user/create', {
      email: document.getElementsByClassName('form__email')[0].value,
      password: document.getElementsByClassName('form__password')[0].value,
    }).then(function(resp) {
      console.log(resp.data);
    });
  }

  render() {
    return (
      <section className='landing'>
        <div className='landing__logo'>Logo</div>
        <div className='landing__title'>Welcome to Finterest</div>
        <div className='landing__sub'>Find new ideas to try</div>
        <form onSubmit={this.onSubmit} className='landing__form'>
          <input type='text' name='email' className='form__email' placeholder='Email' />
          <input type='password' name='password' className='form__password' placeholder='Create a password' />
          <button className='form__login'>Continue</button>
        </form>
      </section>
    );
  }
}
export default Landing;

