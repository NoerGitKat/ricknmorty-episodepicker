import React, { createContext, useReducer } from 'react';
import rootReducer from './reducers';
import { IState } from '../interfaces';

const INITIAL_STATE: IState = { episodes: [], favorites: [] };

export const Store = createContext<IState | any>(INITIAL_STATE);

export function StoreProvider(props: any): JSX.Element {
	const [state, dispatch] = useReducer(rootReducer, INITIAL_STATE);
	return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>;
}
