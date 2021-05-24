import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TopicList = ({ fileList, setBoard }) => {
  console.log(fileList);
  let getData = (title) => {
    fetch(`/api/topic/${title}`, {
      method: 'get',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBoard(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Link to="#">
        <h1>생활코딩 Server Side JavaScript를 react와 express 변경 적용</h1>
      </Link>
      <ul>
        {fileList.map((value, index) => {
          return (
            <li key={index}>
              <Link
                to="#"
                onClick={() => {
                  getData(value);
                }}
              >
                {value}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopicList;
