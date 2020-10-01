import React from "react";
import { NavContainer as Nav } from "./components/Nav/Nav.container";
import { HashRouter, Route, Switch } from "react-router-dom";
import { VotingStatsContainer as VotingStats } from "./components/VotingStats/VotingStats.container";
import { RegisterContainer } from "./components/Register/Register.container";
import { SpreadingAwarenessContainer as SpreadingAwareness } from "./components/SpreadingAwareness/SpreadingAwareness.container";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-left">
          <h1>Logo</h1>
          <p>Be heard</p>
        </div>
        <Nav />
      </header>
      <HashRouter basename="/">
        <Switch>
          <Route path="/voting-stats" component={VotingStats} />
          <Route path="/register" component={RegisterContainer} />
          <Route exact path="/" />
          <Route exact path="*">
            <div>
              <h2>404</h2>
            </div>
          </Route>
        </Switch>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
