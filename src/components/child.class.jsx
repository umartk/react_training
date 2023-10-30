import React from "react";

class ChildWithClass extends React.Component {
    constructor(p) {
        super(p);
        console.log("1 =======> construtor() called");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("4 =======> componentDidUpdate() called");
    }
    componentDidMount() {
        console.log("3 =======> componentDidMount() called");
    }
    componentWillUnmount() {
        console.log("last =======> componentWillUnmount() called");
    }
    render() {
        console.log("2 =======> render() called");
        const { num } = this.props;
        return (
            <div >
                <h2 >class child and value of count is {num}</h2>
            </div>
        );
    }

};

export default ChildWithClass;
