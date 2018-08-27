import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
// redux-saga
const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store
