import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      {/* Probably put a nav here */}

      <Switch>
        <Route path="/home">
          Home
        </Route>
        <Route path="/somewhereelse">
          Somewhere Else
        </Route>
        <Route path="*">
          404
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
