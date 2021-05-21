import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./pages/Form";
import Home from "./pages/Home";
import Temp from "./pages/Temp";
import Topic from "./pages/Topic";

function App() {
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
}

export default App;
