import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../contexts/Cart.context";

import Button from "../Button/Button.component";
import CartItem from "../CartItem/CartItem.component";

import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <div className="nav-link-container">
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
