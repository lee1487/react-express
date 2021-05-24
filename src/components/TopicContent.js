import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const TopicContent = () => {
  const { id } = useParams();
  let [board, setBoard] = useState({
    title: "",
    description: "",
  });
  let getData = () => {
    fetch(`/api/topic/${id}`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBoard(data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <article>
      <h2>{board.title}</h2>
      {board.description}
    </article>
  );
};

export default TopicContent;
