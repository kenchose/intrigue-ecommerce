// import { useContext } from "react";
// import { CartContext } from "../contexts/Cart.context";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.actions";

import * as sc from "./CheckoutItem.styles";

const CheckoutItem = ({ cartItem }) => {
  // const { addItemToCart, removeItemFromCart, clearItemFromCart } =
  //   useContext(CartContext);

  const { price, quantity, imageUrl, name } = cartItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

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
};

export default CheckoutItem;
