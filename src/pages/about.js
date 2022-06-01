import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';

export default function AboutPage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">About</title>
				<meta key="description" name="description" content="About" />
			</Helmet>
			<h1>About</h1>
		</Layout>
	);
}
