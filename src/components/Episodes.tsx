import React from 'react';
import Episode from './Episode';
import { IEpisode } from './../interfaces';

function Episodes({ episodes }): JSX.Element {
	return (
		<ul className="episode-layout">
			{episodes.map((episode: IEpisode) => (
				<Episode key={episode.id} episode={episode} />
			))}
		</ul>
	);
}

export default Episodes;
