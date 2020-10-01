import React from "react";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { VotingStats } from "./components/VotingStats/VotingStats";
import { RegisterContainer as Register } from "./components/Register/Register.container";
import { Home} from "./components/Home/Home";
import Maps from "./components/Map/Maps"
import "./App.css";

function App() {
  return (
		<div className='App'>
			<header>
				<div className='header-left'>
					<Link to='/'>
						<h1>Logo</h1>
					</Link>
					<p>Be heard</p>
				</div>
				<Nav />
			</header>
			<Switch>
				<Route path='/voting-stats' component={VotingStats} />
				<Route path='/register' component={Register} />
				<Route exact path='/' component={Home} />
				<Route exact path='/' component={Maps} />
				<Route exact path='*'>
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
