import { IState, IAction } from '../interfaces';
import { FETCH_EPISODES, ADD_FAVORITES, REMOVE_FAVORITES } from './types';

function rootReducer(state: IState, action: IAction): IState {
	switch (action.type) {
		case FETCH_EPISODES:
			return { ...state, episodes: action.payload };
		case ADD_FAVORITES:
			return { ...state, favorites: [...state.favorites, action.payload] };
		case REMOVE_FAVORITES:
			return { ...state, favorites: action.payload };
		default:
			return state;
	}
}

export default rootReducer;
