import "./App.css";
import {Barra} from "./components/Navbar/Barra";
import Principal from "./components/Principal/Principal";

import {Route, Routes, Link} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Barra />
			<Principal />
		</div>
	);
}

export default App;
