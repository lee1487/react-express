import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { welcome } from '../../store';

const Header = () => {
  const dispatcher = useDispatch();
  return (
    <header>
      <h1>
        <Link to="/" onClick={() => dispatcher(welcome())}>
          WEB
        </Link>
      </h1>
      World Wide Web
    </header>
  );
};

export default Header;
