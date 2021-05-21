import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ location }) => {
  let topics = ["JavaScript is...", "Nodejs is...", "Express is..."];

  function SetqueryString(location) {
    let search = location.search.substring(1);
    let searchObj = JSON.parse(
      '{"' +
        decodeURI(search)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') +
        '"}'
    );
    return searchObj;
  }
  let str = ``;
  let query = SetqueryString(location);

  return (
    <div>
      <Link to="/topic?id=0">JavaScript</Link>
      <br />
      <Link to="/topic?id=1">Nodejs</Link>
      <br />
      <Link to="/topic?id=2">Express</Link>
      <br />
      <h1>{topics[query.id]}</h1>
    </div>
  );
};

export default Topic;
