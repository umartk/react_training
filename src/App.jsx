import Child1 from "./components/child1";
import "./App.css";
import { connect } from "react-redux";
import { useState } from "react";

function App(props) {	
	return (
		<>
			<div className="child">
				<Child1 num={props.count} />
			</div>
		</>
	);
}

const mapStateToProps = (state = {}) => {
	const { counter = {} } = state;
	const { count = 0 } = counter;
	return {
		count,
	};
};

export default connect(mapStateToProps)(App);
