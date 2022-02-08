import React from 'react';
import "./Task.css";
const Task = props => {
    return (
        <div>
            <ul className='ul'>{props.items.map((task) => {
                return( <li className='li'>{task.text}</li>)
            })}</ul>
        </div>

    )
}
 
export default Task;