import React, { useState } from 'react';

const Count = () => {

const [count, setCount] = useState(0);

const increment = () => {
    setCount(count + 1)
}
const decrement = () => {
    setCount(count - 1);
}
const clear = () => {
    setCount(0)
}


    return (
        <div 
        className="flex max-w-sm mx-auto bg-gray-200 rounded-xl shadow-md m-8 item-center"
        >
            <h1 
            >{count}</h1>
            <div
            className="flex"
            >
                <button 
                className="bg-transparent py-2 px-4 border hover:text-white border-blue-500 hover:bg-blue-500 rounded m-4"
                onClick={increment}>Increment</button>
                <button 
                className="bg-transparent py-2 px-4 border hover:text-white border-blue-500 hover:bg-blue-500 rounded m-4"
                onClick={decrement}>Decrement</button>
                <button 
                className="bg-transparent py-2 px-4 border hover:text-white border-blue-500 hover:bg-blue-500 rounded m-4"
                onClick={clear}>Clear</button>
            </div>
        </div>
    )
}

export default Count

