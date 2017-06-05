import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../reducers'

import thunk from "redux-thunk"

export default function configureStore(initialState) {

  const middleware = applyMiddleware(thunk)
  const store = createStore(rootReducer, initialState, middleware)
  
  return store
}
