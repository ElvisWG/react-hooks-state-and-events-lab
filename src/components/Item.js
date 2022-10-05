import React,{useState} from "react";

function Item({ name, category }) {
  const [cart, setNewCart] = useState(false);

  function newCart() {
    setNewCart((cart) => !cart);
  }

  const cartInfo = cart ? "Remove" : "Add";
  return (
    <li className={cart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={cart ? "remove" : "add"}
        onClick={newCart}
      >
        { cartInfo} Cart
      </button>
    </li>
  );
}

export default Item;