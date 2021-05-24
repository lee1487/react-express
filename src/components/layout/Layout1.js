import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Home from "../../pages/Home";
import Form from "../../pages/Form";
import Temp from "../../pages/Temp";
import Topic from "../../pages/Topic";
const Layout1 = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/template" exact component={Temp} />
        <Route path="/topic" exact component={Topic} />
        <Route path="/form" exact component={Form} />
      </Router>
    </>
  );
};

export default Layout1;
