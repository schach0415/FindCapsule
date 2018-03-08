import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import contents from './contents'
import capsules from './capsules'
import event from './event'
import events from './events'
import radors from './radors'

const reducer = combineReducers({user, contents, capsules, event, events, radors})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './contents'
export * from './capsules'
export * from './event'
export * from './events'
export * from './radors'
