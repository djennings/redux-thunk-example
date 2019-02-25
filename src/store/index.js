import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { loadState, saveState } from './stateStore';
import thunk from 'redux-thunk';

import { counterReducer } from '../redux/counter';
import { loadingReducer } from '../redux/ui';

import cheesyMiddleware from '../cheesyMiddeware';

const rootReducer = combineReducers({
  counter: counterReducer,
  isLoading: loadingReducer
});

const persisetedState = loadState();

//create store
export const store = createStore(
  rootReducer,
  persisetedState,
  compose(
    applyMiddleware(thunk, cheesyMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
  )
);

store.subscribe(() => {
  saveState(store.getState());
});
