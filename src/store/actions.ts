import { FETCH_EPISODES } from '../store/types';
import { IAction } from './../interfaces';

export const fetchEpisodes = async (dispatch: Function) => {
	const url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
	const response = await fetch(url);
	const episodes = await response.json();
	const action = { type: FETCH_EPISODES, payload: episodes._embedded.episodes };
	return dispatch(action);
};

export const toggleFavEpisode = (dispatch: Function, dispatchObj: IAction): IAction => {
	return dispatch(dispatchObj);
};
