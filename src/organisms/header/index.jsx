import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav data-test-id="navigation">
				<Link to="/">Home</Link>
				<Link to="/about">About me</Link>
			</nav>
		</header>
	);
};

export default Header;
