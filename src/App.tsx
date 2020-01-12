import React, { useContext, useEffect } from 'react';
import { Store } from './store/Store';
import Episodes from './components/Episodes';
import { FETCH_EPISODES } from './store/types';
import './index.css';

function App(): JSX.Element {
	const { state, dispatch } = useContext(Store);

	useEffect(() => {
		state.episodes.length === 0 && fetchEpisodes();
	});

	const fetchEpisodes = async () => {
		const url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
		const response = await fetch(url);
		const episodes = await response.json();
		const action = { type: FETCH_EPISODES, payload: episodes._embedded.episodes };
		return dispatch(action);
	};

	return (
		<>
			<header>
				<h1>Rick and Morty</h1>
				<p>Pick your favorite episode!</p>
			</header>
			<Episodes episodes={state.episodes} />
		</>
	);
}

export default App;
