import { useContext } from "react";

import { CartContext } from "../contexts/Cart.context";

import { ReactComponent as BagIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container">
      <span className="item-count">0</span>
      <div className="shopping-icon">
        <BagIcon onClick={toggleIsCartOpen} />
      </div>
    </div>
  );
};

export default CartIcon;
