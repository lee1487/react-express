import React from 'react';
import { useSelector } from 'react-redux';

const Read = () => {
  const { selected_content_id, contents, mode, welcome_content } = useSelector(
    (store) => store,
  );

  let _content;
  if (mode === 'WELCOME') {
    _content = welcome_content;
  } else {
    _content = contents.find((content) => {
      return content.id === selected_content_id;
    });
  }

  console.log(selected_content_id, contents);
  return (
    <article>
      <h2>{_content.title}</h2>
      {_content.desc}
    </article>
  );
};

export default Read;
