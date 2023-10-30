import { INCREMENT, DECREMENT, SET_COUNTER } from "../constants/ActionTypes";

const INIT_STATE = {
	count: 0,
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case INCREMENT: {
			return {
				...state,
				count: state.count + 1,
			};
		}
		case DECREMENT: {
			return {
				...state,
				count: state.count - 1,
			};
		}

		case SET_COUNTER: {
			return {
				...state,
				count: action.payload,
			};
		}

		default:
			return state;
	}
};
