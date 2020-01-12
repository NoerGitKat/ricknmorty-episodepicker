import React, { useContext, useEffect } from 'react';
import { Store } from './store/Store';
import Episodes from './components/Episodes';
import { fetchEpisodes } from './store/actions';

import './index.css';

function App(): JSX.Element {
	const { state, dispatch } = useContext(Store);

	useEffect(() => {
		state.episodes.length === 0 && fetchEpisodes(dispatch);
	});

	console.log('state', state.favorites);

	return (
		<>
			<header>
				<h1>Rick and Morty</h1>
				<p>Pick your favorite episode!</p>
			</header>
			<Episodes episodes={state.episodes} favorites={state.favorites} dispatch={dispatch} />
		</>
	);
}

export default App;
