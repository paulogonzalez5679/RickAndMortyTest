import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Header = () => {
  return (
    <div className="nav">
      <nav className="nav__left">
        <Link to="/" className="nav__item home">
          Home
        </Link>
      </nav>
      <nav className="nav__right">
        <Link to="/characters" className="nav__item">
          Characters
        </Link>
      </nav>
    </div>
  );
};

export default Header;
