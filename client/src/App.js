import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Shared/NavBar";
import Footer from "./components/Shared/Footer";
import HomeSearch from "./containers/HomeSearch";

function App() {
	return (
		<>
			<Router>
				<NavBar />
        <Switch>
          <Route exact path="/" component={HomeSearch} />
          </Switch>

				<Footer />
			</Router>
		</>
	);
}

export default App;
