import React, { useEffect } from "react";
const ChildWithFunc = ({ num }) => {
	useEffect(() => {
		console.log("2 =======> did mount called with empty array dependancy and it will be called on initial render as well");
		return () => {
			console.log("last ======> called unmount functional component")
		}
	}, []);
	useEffect(() => {
		console.log("3 =======> did update called with num dependancy and it will be called on initial render as well");
	}, [num]);
	console.log("1 =======> render() called,and it will be called on props or state change too");
	return (
		<div >
			<h2 >functional child and value of count is {num}</h2>
		</div>
	);
};

export default ChildWithFunc;
