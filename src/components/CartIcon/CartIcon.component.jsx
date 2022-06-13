// import { useContext } from "react";
// import { CartContext } from "../contexts/Cart.context";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.actions";

import * as sc from "./CartIcon.styles";

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const cartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!cartOpen));

  return (
    <sc.CartIconContainer onClick={toggleIsCartOpen}>
      <sc.ShoppingIcon />
      <sc.ItemCount>{cartCount}</sc.ItemCount>
    </sc.CartIconContainer>
  );
};

export default CartIcon;
