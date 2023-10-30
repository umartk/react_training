import Child7 from "./child7";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, setCount } from "../slices/counter";

const Child6 = () => {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	const handleIncrement = () => {
		dispatch(increment());
	};
	const handleDecrement = () => {
		dispatch(decrement());
	};
	const handleReset = () => {
		dispatch(setCount(0));
	};
	return (
		<div className="child child6">
			<h2 className="text">Child 6,count here {counter.count}</h2>
			<button onClick={handleIncrement}>increment</button>
			<button onClick={handleDecrement}>decrement</button>
			<button onClick={handleReset}>reset</button>
			<Child7 />
		</div>
	);
};

export default Child6;
