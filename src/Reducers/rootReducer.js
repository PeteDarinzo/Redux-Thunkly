import { combineReducers } from "redux";
import titlesReducer from "./titles";
import postReducer from "./post";

const rootReducer = combineReducers({ titles: titlesReducer, post: postReducer });

export default rootReducer;

