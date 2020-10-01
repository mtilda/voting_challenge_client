import React from "react";
import {NavContainer as Nav} from "./components/Nav/Nav.container";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import VoterStatsContainer from "./components/VoterStats/VoterStats.container";
import { RegisterContainer as Register } from "./components/Register/Register.container";
import {FooterContainer as Footer} from "./components/Footer/Footer.container";

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
          <Route path="/register" component={Register} />
          <Route exact path="/">
            <div>
              <h2>Home</h2>
            </div>
          </Route>
          <Route exact path="*">
            <div>
              <h2>404</h2>
            </div>
          </Route>
        </Switch>
      </HashRouter>
      <Footer/>
    </div>
  );
}

export default App;
