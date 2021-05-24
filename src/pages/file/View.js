import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TopicDetail from '../../components/TopicDetail';
import TopicList from '../../components/TopicList';

const View = () => {
  let [fileList, setFileList] = useState([]);

  let [board, setBoard] = useState({
    title: '',
    description: '',
  });

  let getList = () => {
    fetch('/api/topic', {
      method: 'get',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFileList([...data.topics]);
        delete data.topics;
        setBoard({ ...data });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <TopicList fileList={fileList} setBoard={setBoard} />
      <TopicDetail board={board} />
    </>
  );
};

export default View;
