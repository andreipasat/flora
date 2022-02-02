import {combineReducers, createStore} from "redux"
import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import feedReducer from "./feed-reducer";

let reducers = combineReducers({
    feed : feedReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;