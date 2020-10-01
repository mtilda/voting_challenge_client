import React from "react";
import { Nav } from "./components/Nav/Nav";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import { VotingStats } from "./components/VotingStats/VotingStats";
import { RegisterContainer } from "./components/Register/Register.container";
import { SpreadingAwareness } from "./components/SpreadingAwareness/SpreadingAwareness";
import { VoterTurnout } from "./components/VoterTurnout/VoterTurnout"
import { Home} from "./components/Home/Home"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-left">
          <Link to="/"><h1>Logo</h1></Link>
          <p>Be heard</p>
        </div>
        <Nav />
      </header>
      <HashRouter basename="/">
        <Switch>
          <Route path="/voting-stats" component={VotingStats} />
          <Route path="/register" component={RegisterContainer} />
          <Route exact path='/' component = { Home } />
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
