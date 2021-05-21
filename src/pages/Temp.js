import React, { useEffect, useState } from "react";

const Temp = () => {
  const time = Date();
  /*
    const useTitle = (initialTitle) => {
      const [title, setTitle] = useState(initialTitle);
      const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
      };
      useEffect(updateTitle, [title]);
      return setTitle;
    };
    useTitle("express");
  */
  const htmlTitle = document.querySelector("title");
  htmlTitle.innerText = "express";

  return (
    <div>
      <h1>Hello Jade</h1>
      <ul>
        {[...Array(5)].map((value, index) => {
          return <li key={index}>coding</li>;
        })}
      </ul>
      <div>{time}</div>
    </div>
  );
};

export default Temp;
