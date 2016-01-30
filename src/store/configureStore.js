import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { TICK } from '../constants/actionTypes/time';

import persistSettings from './persistSettings';
import * as reducers from '../reducers';

// Setting up a store in Redux can be kind of messy because there are a lot of
// things coming together in one place. Luckily, we don't have _that_ much going
// on in üWave, so it's kind of manageable.

export default function createUwaveStore() {
  const middleware = [
    // Redux-Thunk allows dispatching a function to the store instead of an
    // action object. These functions can then dispatch action objects as they
    // please. It's used primarily for async actions: for example, actions that
    // send HTTP requests. Those might dispatch an action object once the
    // request finishes.
    thunk,
    // Redux-Logger logs state changes to the console, including the
    // Before-state, the Action object, and the After-state. Invaluable for
    // debugging :)
    logger({
      // üWave has a Time store that changes every second with the TICK action,
      // but we don't need to see that happening all the time. This hides the
      // TICK actions from the logs.
      predicate: (getState, action) => action.type !== TICK
    })
  ];

  // Creating a function to create a store! What a time to be alive :)
  const createStoreWithMiddleware = compose(
    // Adds all of the above ☝ features to the store.
    applyMiddleware(...middleware),
    // Keeps the user's settings in localStorage, so that a refresh doesn't
    // reset all your preferences.
    // This is done separately from the Middleware features, because it changes
    // the _initial_ `settings` state, something that Middleware can't do.
    persistSettings
  )(createStore);

  // Yes! We made it :)
  const store = createStoreWithMiddleware(
    // Finish up the reducer function by combining all the different reducers
    // into one big reducer that works on one big state object.
    combineReducers(reducers)
  );

  if (module.hot) {
    // Update the store's reducer function when the reducer source code has
    // changed. See /tasks/watch.js for more on Hot Reloading!
    // This is only used when debugging, not in a deployed app.
    module.hot.accept('../reducers', () => {
      store.replaceReducer(combineReducers(
        require('../reducers')
      ));
    });
  }

  return store;
}