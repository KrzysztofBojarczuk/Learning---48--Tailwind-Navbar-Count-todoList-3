import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="py-4 px-4 bg-gray-400 text-indigo-200">
            <ul className="lg:flex justify-center sm:flex-block">
           
           <li className="mr-20 hover:text-indigo-500">
           <Link className="about" to="/About">About</Link>

           </li>
          
          <li className="mr-20 hover:text-indigo-500">
          <Link className="count" to="/Count">Count</Link>

          </li>

        <li className="mr-20 hover:text-indigo-500">
        <Link className="todolist" to="/Todolist">Todolist</Link>
        </li>


            </ul>
        </div>
    )
}

export default Navbar
