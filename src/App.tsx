import React, { useContext, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Store } from "./store/Store";
import { fetchEpisodes } from "./store/actions";

import "./index.css";

// Lazy loading
const Episodes = lazy(() => import("./components/Episodes"));

function App(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchEpisodes(dispatch);
  });

  return (
    <>
      <header>
        <h1>Rick and Morty</h1>
        <p>Pick your favorite episode!</p>
      </header>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={() => <div>Home!</div>} />
            <Route
              exact
              path="/episodes"
              component={() => (
                <Episodes
                  episodes={state.episodes}
                  favorites={state.favorites}
                  dispatch={dispatch}
                />
              )}
            />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
