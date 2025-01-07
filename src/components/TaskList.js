import React from "react";
import Task from "./Task";


function TaskList({tasks, setTasks}) {

  //console.log(tasks);
  
  function handleDelete(event){
    //console.log(event.target.id)
    setTasks(tasks.filter((task => task.id !== event.target.id)))

  }

  return (
    <div className="tasks">      
      {tasks.map((task) => {
        //console.log(task);
        return (
        <Task key={task.id} text={task.text} category={task.category} id={task.id} handleDelete={handleDelete}/>
      );}
      )}      
    </div>
  );
}

export default TaskList;
