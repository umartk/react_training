import { useEffect, useState } from "react";

const List = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    return <div>
        <h1>List</h1>
        {arr.map(num => {
            return <h2 key={num} >{num}</h2>
        })}
    </div>
}

export default List;