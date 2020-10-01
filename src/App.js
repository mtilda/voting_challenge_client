import React from "react";
import { Nav } from "./components/Nav/Nav";
import { Route, Switch } from "react-router-dom";
import { VotingStats } from "./components/VotingStats/VotingStats";
import { RegisterContainer as Register } from "./components/Register/Register.container";
import { HomeContainer as Home} from "./components/Home/Home.container";
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
        <Switch>
          <Route path="/voting-stats" component={VotingStats} />
          <Route path="/register" component={Register} />
          <Route exact path='/' component = {Home} />
          <Route exact path="*">
            <div>
              <h2>404</h2>
            </div>
          </Route>
        </Switch>
      <footer>
        <p>© Runtime Terrors 2020</p>
        <p>Privacy Policy</p>
      </footer>
    </div>
  );
}

export default App;
