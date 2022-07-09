import React, { forwardRef } from "react";
import { /*useDispatch,*/ useSelector } from "react-redux";

import {
  selectCartCount,
  // selectIsCartOpen,
} from "../../store/cart/cart.selector";
// import { setIsCartOpen } from "../../store/cart/cart.actions";

import * as sc from "./CartIcon.styles";

const CartIcon = forwardRef(({ toggleDropdown }, ref) => {
  // const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  // const cartOpen = useSelector(selectIsCartOpen);
  // const toggleIsCartOpen = () => dispatch(setIsCartOpen(!cartOpen));

  return (
    <sc.CartIconContainer onClick={toggleDropdown} ref={ref}>
      <sc.ShoppingIcon />
      <sc.ItemCount>{cartCount}</sc.ItemCount>
    </sc.CartIconContainer>
  );
});

export default CartIcon;
