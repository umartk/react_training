import { memo, useCallback, useEffect, useMemo, useState } from "react";

const Heavy = ({ start = 0, end = 0 }) => {

    const getSum = () => {
        console.log("called get sum", new Date().toLocaleTimeString());
        let sum = 0;
        for (let i = start; i <= end; i++) {
            sum += i;
        }
        console.log("end", new Date().toLocaleTimeString());

        return sum;
    }
    const sum = getSum();
    return <div>
        <h2>Heavy Component</h2>
        <span> sum from {start} to {end} is {sum} </span>
    </div>
}

const HeavyWithInternalState = ({ start = 0, end = 0 }) => {
    const [count, setCount] = useState(0)
    const getSum = () => {
        console.log("called get sum");
        let sum = 0;
        for (let i = start; i <= end; i++) {
            sum += i;
        }
        return sum;
    }
    const sum = getSum();
    return <div>
        <h2>Heavy Component</h2>
        <span> sum from {start} to {end} is {sum} </span>
        <p>count {count}</p>
        <button onClick={() => {
            setCount(count + 1);
        }}>increment</button>
    </div>
}


export const HeavyWithInternalStateAndUseMemo = memo(({ start = 0, end = 0 }) => {
    const [count, setCount] = useState(0)
    const getSum = () => {
        console.log("called get sum");
        let sum = 0;
        for (let i = start; i <= end; i++) {
            sum += i;
        }
        return sum;
    }
    const setCountWithCallBack = useCallback(() => {
        console.log("called test function and count is ", count);
        setCount(count + 1);
        //it will connsole 0 in count because test function has not updated it defination
        //it will always set count to 1 due to 0+1
    }, []);
    const setCountWithCallBackCorrectd = useCallback(() => {
        console.log("called test function and count is ", count);
        setCount(count + 1);
    }, [count]);
    const sum = useMemo(getSum, [start, end]);
    return <div>
        <h2>Heavy Component</h2>
        <span> sum from {start} to {end} is {sum} </span>
        <p>count {count}</p>
        <button style={{ color: "white", backgroundColor: "black", marginRight: "8px" }} onClick={() => {
            setCount(count + 1);
        }}>increment</button>
        <button style={{ color: "white", backgroundColor: "purple", marginRight: "8px" }} onClick={setCountWithCallBack}>set count with call back</button>
        <button style={{ color: "white", backgroundColor: "orange" }} onClick={setCountWithCallBackCorrectd}>set count with call back corrcted</button>
    </div>
}, (prevProps, props) => {
    return prevProps.start === props.start && prevProps.end === props.end
})


export const MemoizedHeavyWithInternalState = memo(HeavyWithInternalState, (prevProps, props) => {
    return prevProps.start === props.start && prevProps.end === props.end
})


export const MemoizedHeavy = memo(Heavy, (prevProps, props) => {
    return prevProps.start === props.start && prevProps.end === props.end
})

export default Heavy