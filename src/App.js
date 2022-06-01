import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages';
import About from './pages/about';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
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
}
