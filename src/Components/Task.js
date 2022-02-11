import React from 'react';
import "./Task.css";
const Task = props => {
    return (
        <div className='task-content'>
            <ul className='task-list'>{props.items.map((task) => {
                return( <li className='task-item'>{task.text}</li>)
            })}</ul>
        </div>

    )
}
 
export default Task;