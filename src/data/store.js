import { createStore, applyMiddleware } from "redux"
import reduxLogger from "redux-logger"
import reducer from "./reducer"

const store = createStore(reducer, applyMiddleware(reduxLogger))

export default store