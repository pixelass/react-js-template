import {useEffect, useState} from 'react';

import {GlobalStyle} from './styles';

export default function App() {
	const [{data, loading, error}, setState] = useState({
		data: null,
		loading: false,
		error: null,
	});
	useEffect(() => {
		setState(previousState => ({
			data: previousState.data,
			loading: true,
			error: null,
		}));
		fetch('/api/hello')
			.then(response => {
				console.log(response);
				if (response.ok) {
					return response.json();
				}
				return Promise.reject(new Error(response.statusText));
			})
			.then(data => {
				setState(previousState => ({
					data: data,
					loading: false,
					error: null,
				}));
			})
			.catch(error => {
				setState(previousState => ({
					data: previousState.data,
					loading: false,
					error,
				}));
			});
	}, []);
	console.log(error);
	return (
		<>
			<GlobalStyle />
			<h1>Hello Vercel API routes</h1>
			{loading && <div>Loading…</div>}
			{error && <div>{error.message}</div>}
			{data && <pre>{JSON.stringify(data, null, 4)}</pre>}
		</>
	);
}
