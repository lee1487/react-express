import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProcess, updateProcess } from '../../store';
const Update = () => {
  const dispatcher = useDispatch();
  const { selected_content_id, contents } = useSelector((store) => store);
  let [_content, set_content] = useState(
    contents.find((content) => {
      return content.id === selected_content_id;
    }),
  );

  let onChangeHandler = (e) => {
    set_content({ ..._content, [e.target.name]: e.target.value });
    console.log(_content);
  };
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        dispatcher(updateProcess({ ..._content }));
      }}
    >
      <input type="hidden" name="id" value={_content.id} />
      <p>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={_content.title}
          onChange={onChangeHandler}
        />
      </p>
      <p>
        <textarea
          type="text"
          name="desc"
          placeholder="description"
          value={_content.desc}
          onChange={onChangeHandler}
        />
      </p>
      <p>
        <input type="submit" />
      </p>
    </form>
  );
};

export default Update;
