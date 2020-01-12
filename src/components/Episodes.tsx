import React from 'react';
import Episode from './Episode';
import { IEpisode } from './../interfaces';

const Episodes = ({ episodes, favorites, dispatch }): JSX.Element => {
	return (
		<ul className="episode-layout">
			{episodes.map((episode: IEpisode) => (
				<Episode key={episode.id} episode={episode} dispatch={dispatch} favorites={favorites} />
			))}
		</ul>
	);
};

export default Episodes;
