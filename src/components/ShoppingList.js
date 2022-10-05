import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [shoppingItems, setShoppingItems] = useState('All')
  const setShopping = (e) =>{
    setShoppingItems(e.target.value);
  }

  console.log(items);
  const newValues = items.filter((item)=>{
    if (shoppingItems === 'All'){
      return item
    }
    else{
      return item.category === shoppingItems
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={setShopping}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newValues.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;