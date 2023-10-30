import React, { useState } from "react";
import ChildWithFunc from "./components/child.func";
import "./App.css";
import ChildWithClass from "./components/child.class";

function App(props) {
	const [showClassComponent, setShowClassComponent] = useState(false);
	const [count, setCount] = useState(0);
	const increment = () => {
		setCount(count + 1);
	}
	const toggleClassComponent = () => {
		setShowClassComponent(!showClassComponent);
	}
	return (
		<>
			<div >
				{!showClassComponent ? <ChildWithFunc num={count} /> : <ChildWithClass num={count} />}
				<button style={{ backgroundColor: "rebeccapurple", color: 'white', marginRight: "8px" }} onClick={increment}>increment</button>
				<button style={{ backgroundColor: "yellowgreen", marginRight: "8px" }} onClick={toggleClassComponent}>show {showClassComponent ? "functional component" : "class component"}</button>
			</div>
		</>
	);
}

export default App;
