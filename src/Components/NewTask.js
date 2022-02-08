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
        <div>
            <form onSubmit={addTaskHandler}>
                <input className='input' value={textinput} type="text" onChange={textChandgeHandler} />
                <button>ADD Task</button>
            </form>
        </div>)
}
 
export default NewTask;