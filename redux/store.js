import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import { createWrapper } from 'next-redux-wrapper'

const middlewares = [thunk];

const composeEnhancers = composeWithDevTools({});

const initStore = () => {
  return createStore(RootReducer, composeEnhancers(applyMiddleware(...middlewares)))
}

export const wrapper = createWrapper(initStore)
