import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../contexts/Cart.context";

import Button from "../Button/Button.component";
import CartItem from "../CartItem/CartItem.component";

import * as sc from "./CartDropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <sc.CartDropdownContainer>
      <sc.CartItems>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })
        ) : (
          <sc.EmptyMessage>Your cart is empty</sc.EmptyMessage>
        )}
      </sc.CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </sc.CartDropdownContainer>
  );

  // return (
  //   <div className="cart-dropdown-container">
  //     <div className="cart-items">
  //       {cartItems.length ? (
  //         cartItems.map((item) => {
  //           return <CartItem key={item.id} cartItem={item} />;
  //         })
  //       ) : (
  //         <span className="empty-message">Your cart is empty</span>
  //       )}
  //     </div>
  //     <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
  //   </div>
  // );
};

export default CartDropdown;
