import React from "react";


function Task({ text, category, id, handleDelete}) {
  

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete} id={id}>X</button>
    </div>
  );
}

export default Task;
