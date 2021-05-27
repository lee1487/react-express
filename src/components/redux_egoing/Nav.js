import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { read } from '../../store';

const Nav = () => {
  const { contents } = useSelector((store) => store);
  const dispatcher = useDispatch();

  return (
    <nav>
      <ul>
        {contents.map((value) => {
          return (
            <li key={value.id}>
              <Link
                to={value.title}
                onClick={() => {
                  dispatcher(read(value.id));
                }}
              >
                {value.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
