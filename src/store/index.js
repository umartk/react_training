// import { applyMiddleware, compose, createStore } from "redux";
// import rootReducers from "../reducers/index";

// let composeEnhancers;
// if (process.env.NODE_ENV === "production") {
// 	composeEnhancers = compose;
// } else {
// 	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// }

// //export default function configureStore(initialState) {
// const configureStore = () => {
// 	const store = createStore(
// 		rootReducers,
// 		undefined,
// 		composeEnhancers(applyMiddleware())
// 	);

// 	return { store };
// };

// export default configureStore;

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counter";


export default function configureStoreFunc() {
	const store = configureStore({
		reducer: {
			counter: counterSlice,
		},
	});
	return { store }
}


