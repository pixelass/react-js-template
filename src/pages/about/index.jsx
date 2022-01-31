import {Helmet} from "react-helmet";
import React from "react";
import Layout from "../../organisms/layout";

const Page = () => {
	return (
		<Layout>
			<Helmet>
				<title key="title">About</title>
				<meta key="description" name="description" content="About" />
			</Helmet>
			<h1>About</h1>
		</Layout>
	);
};

export default Page;
