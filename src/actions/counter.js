import { INCREMENT, DECREMENT, SET_COUNTER } from "../constants/ActionTypes";

export const increment = () => {
	return {
		type: INCREMENT,
	};
};

export const decrement = () => {
	return {
		type: DECREMENT,
	};
};

export const setCount = (payload) => {
	return {
		type: SET_COUNTER,
		payload,
	};
};
