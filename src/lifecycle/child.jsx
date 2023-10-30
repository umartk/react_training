import { useEffect, useState } from "react";

const Child = () => {
    useEffect(() => {
        return () => {
            console.log("unmount child");
        }
    }, []);
    return <h2>Count is Zero</h2>
}

export default Child;