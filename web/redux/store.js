import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducers from './reducers/rootReducer';
import reduxThunk from 'redux-thunk';

export function initializeStore() {
  return createStore(
    Reducers,
    composeWithDevTools(applyMiddleware(reduxThunk))
  );
}
