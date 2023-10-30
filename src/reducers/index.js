import count from "./count";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	counter: count,
});

export default rootReducer;
