import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Home from "../../pages/Home";
import Form from "../../pages/Form";
import Temp from "../../pages/Temp";
import Viewee from "../../pages/file/View";
import New from "../../pages/file/New";
import TopicContent from "../TopicContent";
const Layout1 = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/template" exact component={Temp} />
        <Route path="/topic" exact component={Viewee} />
        <Route path="/form" exact component={Form} />
        <Route path="/topic/new" exact component={New} />
      </Router>
    </>
  );
};

export default Layout1;
