import { useContext } from "react";

import { CartContext } from "../contexts/Cart.context";

import * as sc from "./CartIcon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <sc.CartIconContainer onClick={toggleIsCartOpen}>
      <sc.ShoppingIcon />
      <sc.ItemCount>{cartCount}</sc.ItemCount>
    </sc.CartIconContainer>
  );

  // return (
  //   <div className="cart-icon-container" onClick={toggleIsCartOpen}>
  //     <BagIcon className="shopping-icon" />
  //     <span className="item-count">{cartCount}</span>
  //   </div>
  // );
};

export default CartIcon;
