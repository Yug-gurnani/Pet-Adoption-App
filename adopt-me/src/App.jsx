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
      <div
        className="p-0 m-0"
        style={{
          background:
            "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
        }}
      >
        <Router>
          <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
            <Link className="text-6xl text-white hover:text-gray-200" to="/">
              Adopt Me!
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
