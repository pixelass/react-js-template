import { Global } from "@emotion/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./";
import About from "./about";
import { globalStyle } from "../ions/styles";

const App = () => {
	return (
		<>
			<Global styles={globalStyle} />
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="about/" element={<About />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
