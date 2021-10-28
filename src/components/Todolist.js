import React, { useState } from 'react';


const Todolist = () => {
    
    const [userInput, setUserInput] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handelChange = (e) => {
        e.preventDefault();
        setUserInput(e.target.value);
    }
    const handelSubmit = (e) => {
        e.preventDefault();

        setTodoList([
            userInput, ...todoList
        ])
        setUserInput("");
    }
    const handelDelete = (todo) => {
        const updateArr = todoList.filter(todoItem => todoList.indexOf(todoItem)
        != todoList.indexOf(todo))
        setTodoList(updateArr);
    }


    return (
        <div>
            
            <div className="flex max-w-sm mx-auto">
            <div className="flex p-6 bg-gray-200 rounded-xl shadow-md m-8">
                <input 
                className="py-2 px-4 border-blue-500 rounded m-4"
                type="text"
                value={userInput}
                onChange={handelChange}
                />
                <button
                className="bg-transparent py-2 px-4 border hover:text-white border-blue-500 hover:bg-blue-500 rounded m-4"
                onClick={handelSubmit}
                >Submit</button>
            </div>
            </div>

             <div className="">
                {todoList.map((todo,id) => {
                    return <div
                    className="flex-block max-w-sm mx-auto p-6 bg-gray-200 rounded-xl m-2"
                    key={id}>{todo} 
                    <button
                     className="bg-transparent py-2 px-4 border hover:text-white border-blue-500 hover:bg-blue-500 rounded m-4"
                    onClick={(e) => {
                        e.preventDefault();
                        handelDelete(todo)
                    }}
                    >Delete</button>

                    </div>
                })


                }
             </div>
             
             </div>
            
    )
}

export default Todolist
