import './App.css';
import React, { useState } from 'react';


function App() {

  const [items, setItems] = useState([
    { name: "Buy Shopping", priority: "high" },
    { name: "Clean Bathroom", priority: "low" },
    { name: "Car's MOT", priority: "high" },
  ])

  const [newItem, setNewItem] = useState("");
  const [newPriority, setPriority] = useState("")

  const itemNodes = items.map((item, index) => {
    return (
      <li key={index} className={item.priority === "high" ? "high" : "low"}>
        <span>{item.name}</span>
      </li>
    )
  })

  const saveNewItem = (event) => {
    event.preventDefault()
    const newItemsArray = [...items];
    newItemsArray.push({ name: newItem, priority: newPriority })
    setItems(newItemsArray)
    setNewItem("")
  }

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  }

  const handleRadio =(event) => {
    setPriority(event.target.value)
  }





  return (
    <div className="App">
      <h1>To Do's</h1>


      <form onSubmit={saveNewItem}>
        <label htmlFor='new-item'> </label>
        <input type="text"
          id="new-item"
          value={newItem}
          onChange={handleInputChange}
          placeholder="What do you want to do?">
        </input>

        <div onChange={handleRadio}>
          <input type="radio" name="priority" value="high" />High
          <input type="radio" name="priority" value="low" /> Low
        </div>

        <input type="submit" value="Save new item"></input>

      </form>

      <h2>{itemNodes}</h2>

    </div>

  );
}

export default App;
