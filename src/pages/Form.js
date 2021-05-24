import React from "react";

const Form = () => {
  return (
    <div>
      <form action="http://localhost:3003/form" method="post">
        <p>
          <input type="text" name="title" />
        </p>
        <p>
          <textarea name="description"></textarea>
        </p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
