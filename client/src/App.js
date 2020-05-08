import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/Shared/NavBar";
import Footer from "./components/Shared/Footer";

function App() {
	return (
		<>
			<Router>
				<NavBar />
				<Footer />
			</Router>
		</>
	);
}

export default App;
