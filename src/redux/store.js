import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './reducers/reducer';

const initialState = {};
const middlewares = [thunk];
let devtools = (x) => x;

if (
  process.env.NODE_ENV !== 'production'
&& typeof window !== 'undefined'
  && window.__REDUX_DEVTOOLS_EXTENSION__
) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const Store = createStore(
  RootReducer,
  initialState,
  compose(applyMiddleware(...middlewares), devtools),
);

export default Store;
