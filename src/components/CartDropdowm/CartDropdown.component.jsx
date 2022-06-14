import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCartItems } from "../../store/cart/cart.selector";

import Button from "../Button/Button.component";
import CartItem from "../CartItem/CartItem.component";

import * as sc from "./CartDropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
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
};

export default CartDropdown;
