import React from 'react';

import Icon from './Icon';

const Header = ({ children }) => (
  <header>
    <nav>
      <div>
        <button className="Header-user">
          <Icon
            user
            viewBox="0 0 12 14"
            width="12px"
            height="14px"
            fill="#fff"
          />
          <span>Sign In</span>
        </button>
      </div>
      <div>
        <a className="Header-link">Dashboard</a>
      </div>
      <div>
        <Icon
          logo
          viewBox="0 0 163 140"
          width="40px"
          height="35px"
          fill="#fff"
        />
      </div>
    </nav>
    {children}
  </header>
);

export default Header;
