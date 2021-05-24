import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopicContent from "../../components/TopicContent";

const View = () => {
  let [fileList, setFileList] = useState([]);
  let [board, setBoard] = useState({
    title: "",
    description: "",
  });
  let [refresh, setRefresh] = useState(false);
  let getData = () => {
    fetch("/api/topic", {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        setFileList([...data.topics]);
        delete data.topics;
        setBoard(data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, [refresh]);

  let getBoard = (title) => {
    fetch(`/api/topic/${title}`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        setBoard(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Link
        to="#"
        onClick={() => {
          setRefresh(!refresh);
        }}
      >
        <h1>생활코딩 Server Side JavaScript를 react와 express 변경 적용</h1>
      </Link>
      <ul>
        {fileList.map((value, index) => {
          return (
            <li key={index}>
              <Link
                to="#"
                onClick={() => {
                  getBoard(value);
                }}
                style={{ cursor: "pointer" }}
              >
                {value}
              </Link>
            </li>
          );
        })}
      </ul>
      {board && (
        <article>
          <h2>{board.title}</h2>
          {board.description}
        </article>
      )}
      <div>
        <Link to="/topic/new">new</Link>
      </div>
    </div>
  );
};

export default View;
