import { useContext } from "react";

import { CartContext } from "../contexts/Cart.context";

import { ReactComponent as BagIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <BagIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;