import { useEffect, useState } from "react";
import Child from "./child";

const LifeCycle = () => {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState("black");
    useEffect(() => {
        console.log("did mount 2");
    }, []);
    useEffect(() => {
        console.log("did update 3 ", count);
    }, [count])
    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleReset = () => {
        console.log("called reset");
        setCount(0)
    }
    console.log("render 1");
    return <div>
        <h1>Life Cycle with hook</h1>
        {count === 0 ? <Child /> : <h2>Count {count}</h2>}
        {/* <h2>Count {count}</h2> */}
        <div style={{ display: "flex", width: "300px", justifyContent: "space-between" }}>
            <button style={{ backgroundColor: "green", color: "white" }} onClick={handleIncrement}>Increment</button>
            <button style={{ backgroundColor: "red", color: "white" }} onClick={handleReset}>Reset</button>
        </div>

    </div>
}

export default LifeCycle;