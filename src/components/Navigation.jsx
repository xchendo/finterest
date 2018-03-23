import React from 'react';

const Navigation = () =>
  (
    <nav className="navigation">
      <ul className="navigation__links">
        <li className="navigation__logo">Logo</li>
        <li className="navigation__search">
          <form>
            <input placeholder="Search" />
          </form>
        </li>
        <li className="navigation__profile">Me</li>
      </ul>
    </nav>

  );

export default Navigation;
