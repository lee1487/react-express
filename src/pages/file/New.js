import React from "react";

const New = () => {
  return (
    <div>
      <form action="/api/topic" method="post">
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="description"></textarea>
        </p>
        <p>
          <input type="submit" />
        </p>
      </form>
    </div>
  );
};

export default New;
