import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import Page404 from "./Page404";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Link to="/">
            <h1>Adopt Me!</h1>
          </Link>
        </header>
        <Switch>
          <Route exact path="/details/:id">
            <Details />
          </Route>
          <Route exact path="/">
            <SearchParams />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
