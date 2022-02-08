import React ,{useState} from 'react'; 
import "./App.css"
import NewTask from './Components/NewTask';
import Task from './Components/Task';
const App = () => {
  const [Tasks,setTasks] = useState([

    {id:1,text:'Functional App'},
    {id:2,text:'Landing Page'},
  ])
  const addNewTaskHandler = (newTask) =>{
    setTasks((prevTasks) =>{
      return prevTasks.concat(newTask);
    });
  }
  return ( 
    <div className='header'>
      <h2>MY Tasks</h2>
      <NewTask addTask={addNewTaskHandler} />
      <Task items={Tasks} />
    </div>
   );
}
 
export default App;