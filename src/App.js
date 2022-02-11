import React, { useState } from 'react';
import "./App.css"
import NewTask from './Components/NewTask';
import Task from './Components/Task';
import Header from './Components/header/header';
const App = () => {
  const [Tasks, setTasks] = useState([

    { id: 1, text: 'Functional App' },
    { id: 2, text: 'Landing Page' },
  ])
  const[btnState , setState] = useState(false);

  const addNewTaskHandler = (newTask) => {
    setTasks((prevTasks) => {
      return prevTasks.concat(newTask);
    });
  }

  const bntShow = () =>{
    setState(true)
  }
  const btnDisble = () =>{
    setState(false)
  }


  return (
    <React.Fragment>
      <Header />
      <section className='task'>
        <div className='btn-contaner'>
          <a href='#Task' className='btn' onClick={bntShow}>+</a>
          {btnState ? <a href='#'  className='btn' onClick={btnDisble}>-</a> : null }
        </div>
        <div className='Task-box' id='Task'>
          <NewTask className='task-input' addTask={addNewTaskHandler} />
        </div>
        <Task items={Tasks} />
      </section>
    </React.Fragment>
  );
}

export default App;