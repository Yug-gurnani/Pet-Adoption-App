import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Link to="/">
            <h1>Adopt Me!</h1>
          </Link>
        </header>
        <Route exact path="/details/:id">
          <Details />
        </Route>
        <Route exact path="/">
          <SearchParams />
        </Route>
      </Router>
    </div>
  );
}

export default App;
