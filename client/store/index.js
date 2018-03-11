import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import content from './content'
import contents from './contents'
import capsule from './capsule'
import capsules from './capsules'
import event from './event'
import events from './events'
import radars from './radars'

const reducer = combineReducers({user, content, contents, capsule, capsules, event, events, radars})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './content'
export * from './contents'
export * from './capsule'
export * from './capsules'
export * from './event'
export * from './events'
export * from './radars'
