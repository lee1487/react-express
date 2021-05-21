import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Temp from "./pages/Temp";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/template" exact component={Temp} />
      </Router>
    </>
  );
}

export default App;
