import React from 'react';
import { useDispatch } from 'react-redux';
import { createProcess } from '../../store';

const Create = () => {
  const dispatcher = useDispatch();
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        dispatcher(
          createProcess({
            title: e.target.title.value,
            desc: e.target.desc.value,
          }),
        );
      }}
    >
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea type="text" name="desc" placeholder="description" />
      </p>
      <p>
        <input type="submit" />
      </p>
    </form>
  );
};

export default Create;
