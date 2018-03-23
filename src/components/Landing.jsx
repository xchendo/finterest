import React from  'react';

const Landing = () =>
  (
    <section className="landing">
      <div className="landing__logo">Logo</div>
      <div className="landing__title">Welcome to Finterest</div>
      <div className="landing__sub">Find new ideas to try</div>
      <div className="landing__form">
        <input type="text" className="form__email" placeholder="Email" />
        <input type="password" className="form__password" placeholder="Create a password" />
      </div>
    </section>
  );
export default Landing;

