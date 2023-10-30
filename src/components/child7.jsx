import { connect } from "react-redux";
import { increment, decrement, setCount } from "../actions/counter";
const Child7 = (props) => {

	const handleIncrement = () => {
		props.increment();
	};
	const handleDecrement = () => {
		props.decrement();
	};
	const handleReset = () => {
		props.setCount(0);
	};
	return (
		<div>
			<h2>Child 7 count here is {props.count}</h2>
			<button onClick={handleIncrement}>increment</button>
			<button onClick={handleDecrement}>Decrement</button>
			<button onClick={handleReset}>reset</button>
		</div>
	);
};
const mapStateToProps = (state = {}) => {
	const { counter = {} } = state;
	const { count = 0 } = counter;
	return {
		count,
	};
};
export default connect(mapStateToProps, {
	increment,
	decrement,
	setCount,
})(Child7);
