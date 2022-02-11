import React,{useState} from 'react';
import "./NewTask.css";
const NewTask = props => {
    const[textinput,settextinput] = useState('');
    const addTaskHandler = (event) => {
        event.preventDefault()
        const newTask = {
            id:Math.random.toString(),
            text:textinput
        };
        settextinput('');
        props.addTask(newTask);
    }
    const textChandgeHandler = (event) => {
        settextinput (event.target.value)

    }
    return (
        <React.Fragment>
            <form className='task-from' onSubmit={addTaskHandler}>
            <label form='task-Adder' className='task-label'>Task Name</label>
                <input className='task-input' id='task-Adder' value={textinput} type="text" onChange={textChandgeHandler} />
                <input href='#' type='submit' name='Add Task' className='btn-submit' />
            </form>
        </React.Fragment>)
}
 
export default NewTask;