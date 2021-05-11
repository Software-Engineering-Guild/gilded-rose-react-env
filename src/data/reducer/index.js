import { combineReducers } from "redux"
import shopReducer from "./shop"

export default combineReducers({
    items: shopReducer
})