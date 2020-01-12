import React from 'react';

const Episode = ({ episode }) => {
	return (
		<li className="episode-box">
			<img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
			<div>{episode.name}</div>
			<section>
				Season: {episode.season} Episode: {episode.number}
			</section>
			<button type="button" onClick={() => alert('saved to favorites!')}>
				Add to favorites!
			</button>
		</li>
	);
};

export default Episode;
