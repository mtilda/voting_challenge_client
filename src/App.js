import React from "react";

import {
  HashRouter,
  Route,
  Switch
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <HashRouter basename="/">
      {/* Probably put a nav here */}

      <Switch>
        <Route exact path="/">
          <div><h2>Home</h2></div>
        </Route>
        <Route exact path="*">
          <div><h2>404</h2></div>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
