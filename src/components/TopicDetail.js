import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const TopicDetail = ({ board }) => {
  console.log('TopicDetail', board);
  return (
    <article>
      <h2>{board.title}</h2>
      {board.description}
    </article>
  );
};

export default TopicDetail;
