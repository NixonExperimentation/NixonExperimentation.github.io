import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css';
import Nav from './components/Nav';
import Jobs from './components/Jobs';
import Projects from './components/Projects';

export default function App(){
	return (
		<HeaderNode />
	);
}

function HeaderNode(){
	return (
		<header>
			<Nav />
			<h1>Nixon Nelson</h1>
		</header>
	);
}