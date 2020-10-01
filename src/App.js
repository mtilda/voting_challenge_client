import React from "react";
import { NavContainer as Nav } from "./components/Nav/Nav.container";
import { HashRouter, Route, Switch } from "react-router-dom";
import VoterStatsContainer from "./components/VoterStats/VoterStats.container";
import { RegisterContainer } from "./components/Register/Register.container";
import { SpreadingAwarenessContainer as SpreadingAwareness } from "./components/SpreadingAwareness/SpreadingAwareness.container";
import { VoterTurnoutContainer as VoterTurnout } from "./components/VoterTurnout/VoterTurnout.container";
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
          <Route path="/voter-stats" component={VoterStatsContainer} />
          <Route path="/register" component={RegisterContainer} />
          <Route exact path="/" component={SpreadingAwareness} />
          <Route exact path="*">
            <div>
              <h2>404</h2>
            </div>
          </Route>
        </Switch>
      </HashRouter>
      <footer>
        <p>© Runtime Terrors 2020</p>
        <p>Privacy Policy</p>
      </footer>
    </div>
  );
}

export default App;
