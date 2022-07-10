import React, { forwardRef } from "react";
import { useSelector } from "react-redux";

import { selectCartCount } from "../../store/cart/cart.selector";

import * as sc from "./CartIcon.styles";

const CartIcon = forwardRef(({ toggleDropdown }, ref) => {
  const cartCount = useSelector(selectCartCount);

  return (
    <sc.CartIconContainer onClick={toggleDropdown} ref={ref}>
      <sc.ShoppingIcon />
      <sc.ItemCount>{cartCount}</sc.ItemCount>
    </sc.CartIconContainer>
  );
});

export default CartIcon;
