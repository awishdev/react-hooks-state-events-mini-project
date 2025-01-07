import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 as uuid } from "uuid";
import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {


const [tasks, setTasks] = useState(TASKS.map((task) => ({
  ...task,
  id: uuid()
})));

function onTaskFormSubmit(newTask){
  setTasks([...tasks, {...newTask, id: uuid()}])
}

const [currentCat, setCurrentCat] = useState("All");

//const filteredCategories = [categories.filter(cat => cat.isSelected)];

//const selectedCategory = filteredCategories.length > 0 ? filteredCategories[0] : defaultCat;
//console.log(selectedCategory)



const tasksToRender = tasks.filter(task => task.category === currentCat || currentCat === "All");

  //console.log(tasksToRender)


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setCurrentCat={setCurrentCat}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasksToRender} setTasks={setTasks}/>
    </div>
  );
}

export default App;
