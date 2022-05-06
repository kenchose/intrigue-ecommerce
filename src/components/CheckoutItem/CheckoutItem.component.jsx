import { useContext } from "react";

import { CartContext } from "../contexts/Cart.context";

import * as sc from "./CheckoutItem.styles";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const { price, quantity, imageUrl, name } = cartItem;

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeHandler = () => removeItemFromCart(cartItem);

  return (
    <sc.CheckoutItemContainer>
      <sc.ImageContainer>
        <img src={`${imageUrl}`} alt={`${name}`} />
      </sc.ImageContainer>
      <sc.BaseSpan>{name}</sc.BaseSpan>
      <sc.Quantity>
        <sc.Arrow onClick={removeHandler}>&#10094;</sc.Arrow>
        <sc.Value>{quantity}</sc.Value>
        <sc.Arrow onClick={addItemHandler}>&#10095;</sc.Arrow>
      </sc.Quantity>
      <sc.BaseSpan>${price}</sc.BaseSpan>
      <sc.RemoveButton onClick={clearItemHandler}>&#10005;</sc.RemoveButton>
    </sc.CheckoutItemContainer>
  );

  // return (
  //   <div className="checkout-item-container">
  //     <div className="image-container">
  //       <img src={`${imageUrl}`} alt={`${name}`} />
  //     </div>
  //     <span className="name">{name}</span>
  //     <div className="quantity">
  //       <div className="arrow" onClick={removeHandler}>
  //         &#10094;
  //       </div>
  //       <div className="value">{quantity}</div>
  //       <div className="arrow" onClick={addItemHandler}>
  //         &#10095;
  //       </div>
  //     </div>
  //     <span className="price">${price}</span>
  //     <div className="remove-button" onClick={clearItemHandler}>
  //       &#10005;
  //     </div>
  //   </div>
  // );
};

export default CheckoutItem;
