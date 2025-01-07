import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ButtonMaker({cat, handleClick}){

  return (
    <>
      <button id={cat.id} className={cat.isSelected ? "selected" : null} onClick={handleClick}>{cat.category}</button>
    </>
  );



}

function CategoryFilter({categories, setCurrentCat}) {

  const [cats, setCats] = useState(categories.map((cat) => ({
    category: cat,
    id: uuid(),
    isSelected: false
  })));

  function handleCategoryClick(event){
    //console.log(event)
    setCats(cats.map((cat) => {
      (cat.id === event.target.id ? cat.isSelected = true : cat.isSelected = false )
      return cat;
    }))

    setCurrentCat(event.target.textContent);

  }

  const catButtons = [cats.map((category) => <ButtonMaker key={category.id} cat={category} handleClick={handleCategoryClick}/>)]


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catButtons}
    </div>
  );
}

export default CategoryFilter;
