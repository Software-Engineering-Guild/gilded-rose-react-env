import { createStore, applyMiddleware } from "redux"
import reduxLogger from "redux-logger"
import thunkMiddleware from 'redux-thunk'
import reducer from "./reducer"

const middlewares = [reduxLogger, thunkMiddleware]
const store = createStore(reducer, applyMiddleware(...middlewares))

export default store