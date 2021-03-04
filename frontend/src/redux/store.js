import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReduser from "./slice/index.js"
import thunk from 'redux-thunk'

const middleWares = [thunk]
const rootMiddleWares = applyMiddleware(...middleWares)
const compose = composeWithDevTools(rootMiddleWares)
const store = createStore(rootReduser, compose)

export default store