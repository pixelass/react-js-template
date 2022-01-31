import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./";
import About from "./about";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="about/" element={<About />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
