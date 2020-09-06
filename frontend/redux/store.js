// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import Reducers from './reducers';
// import reduxThunk from 'redux-thunk';

// export function initializeStore() {
//   return createStore(
//     Reducers,
//     composeWithDevTools(applyMiddleware(reduxThunk))
//   );
// }
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const enhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware),
);

const initsStore = initialState => createStore(reducers, initialState, enhancer);

export default initsStore;
