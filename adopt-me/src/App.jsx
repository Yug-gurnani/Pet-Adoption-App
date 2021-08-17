import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import Page404 from "./Page404";
import ThemeContext from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState("darkblue");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
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
    </ThemeContext.Provider>
  );
}

export default App;
