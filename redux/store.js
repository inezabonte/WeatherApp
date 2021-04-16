import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper } from 'next-redux-wrapper'

const middlewares = [thunk];

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const initStore = () => {
  return createStore(RootReducer, bindMiddleware(middlewares))
}

export const wrapper = createWrapper(initStore)
