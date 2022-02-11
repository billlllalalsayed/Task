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
  const addNewTaskHandler = (newTask) => {
    setTasks((prevTasks) => {
      return prevTasks.concat(newTask);
    });
  }
  let classess = ['btn','btn-close']

  console.log(classess);
  return (
    <React.Fragment>
      <Header />
      <section className='task'>
        <div className='btn-contaner'>
          <a href='#Task' className='btn'>+</a>
          <a href='#' className='btn'>-</a>
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