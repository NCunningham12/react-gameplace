import React from 'react';
import './Cart.css';

const CartCard = ({ itemImage, itemName, itemPrice, handleClick, item }) => {

  return (
    <div className="CartCard">
      <img src={itemImage} alt="Item" className="itemImage" />
      <h2 className="itemName">{itemName}</h2>
      <div className="Price-Cart">
        <h3>{itemPrice}</h3>
        <button type='button' onClick={() => handleClick(item)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default CartCard;
