import Child2 from "./child2";
const Child1 = ({ num }) => {
	return (
		<div className="child child1">
			<h2 className="text">Child 1 and value of count is {num}</h2>
			<Child2 />
		</div>
	);
};

export default Child1;
