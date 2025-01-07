import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function OptionMaker({cat}){
  if(cat === "All"){return null}
  return(
    <>
      <option value={cat}>{cat}</option>
    </>
  )

}

function NewTaskForm({categories, onTaskFormSubmit}) {
  
  const [taskText, setTaskText] = useState("");
  const [newCategory, setNewCategory] = useState("Code")


 function handleSubmit(event){

    event.preventDefault();
    //console.log(event.target[1].value);
    let newTask = {
      text: taskText,
      category: newCategory,
    };
    onTaskFormSubmit(newTask)

  }
  

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskText} onChange={(e) => setTaskText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => setNewCategory(e.target.value)}>
          {categories.map(cat => <OptionMaker key={uuid()} cat={cat}/>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
