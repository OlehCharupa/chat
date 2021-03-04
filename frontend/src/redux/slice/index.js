import { combineReducers } from "redux";
import messageSlice from './messageSlice.js'


const rootReduser = combineReducers({
    message: messageSlice
})

export default rootReduser