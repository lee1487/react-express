import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { create, update, deleteProcess } from '../../store';

const Control = () => {
  const dispatcher = useDispatch();
  const { selected_content_id } = useSelector((store) => store);
  return (
    <ul>
      <li>
        <Link
          to="create"
          onClick={() => {
            dispatcher(create());
          }}
        >
          create
        </Link>
      </li>
      <li>
        <Link
          to="update"
          onClick={() => {
            dispatcher(update());
          }}
        >
          update
        </Link>
      </li>
      <li>
        <input
          type="button"
          value="delete"
          onClick={() => {
            if (selected_content_id !== null) {
              if (!window.confirm('Really?')) return;
              dispatcher(deleteProcess());
            } else {
              alert('삭제할 리스트를 선택하세요');
            }
          }}
        />
      </li>
    </ul>
  );
};

export default Control;
