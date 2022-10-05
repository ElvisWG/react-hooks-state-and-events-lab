import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const [dark, setDark] = useState(false);
 
  const appClass = dark ? "App dark" : "App light"
  const appText = dark ? "Light Mode" : "Dark Mode";
  function handleDark(){
    setDark((dark) => !dark);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDark}>{appText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;