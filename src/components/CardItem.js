import React from "react";
const CardItem = (props) => {
  return (
    <div className="product-item">
      <img
        src={props.item.image}
        className="product-thumbnail cartItem"
        alt="itemLoaded"
      />
      <h3 className="product-title">{props.item.name}</h3>
      <strong className="product-price">{props.item.price}₫</strong>
    </div>
  );
};

export default CardItem;
