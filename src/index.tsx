import React from 'react';
import ReactDOM from 'react-dom';


import { StoreProvider } from './store/Store';

import App from './App';

const root = document.getElementById('app-root');

ReactDOM.render(
	<StoreProvider>
		<App />
	</StoreProvider>,
	root
);
