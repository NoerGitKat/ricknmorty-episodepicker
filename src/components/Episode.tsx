import React from "react";
import { ADD_FAVORITES, REMOVE_FAVORITES } from "./../store/types";
import { toggleFavEpisode } from "./../store/actions";

const Episode = ({ dispatch, favorites, episode }): JSX.Element => {
  const hasEpisodeInFavs = favorites.includes(episode);
  const favsWithoutEpisode = favorites.filter(
    favorite => favorite.id !== episode.id
  );
  return (
    <li className="episode-box">
      <img src={episode.image.medium} alt={`Rick and Morty: ${episode.name}`} />
      <div>{episode.name}</div>
      <section>
        Season: {episode.season} Episode: {episode.number}
      </section>
      <button
        type="button"
        onClick={() => {
          const dispatchObj = {
            type: hasEpisodeInFavs ? REMOVE_FAVORITES : ADD_FAVORITES,
            payload: hasEpisodeInFavs ? favsWithoutEpisode : episode
          };
          toggleFavEpisode(dispatch, dispatchObj);
        }}
      >
        {hasEpisodeInFavs ? "Remove from favorites!" : "Add to favorites!"}
      </button>
    </li>
  );
};

export default Episode;
