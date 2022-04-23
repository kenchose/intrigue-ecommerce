import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";

import CheckoutItem from "../../CheckoutItem/CheckoutItem.component";

import "./Checkout.styles.scss";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span className="product">Product</span>
        </div>
        <div className="header-block">
          <span className="description">Description</span>
        </div>
        <div className="header-block">
          <span className="quantity">Quantity</span>
        </div>
        <div className="header-block">
          <span className="price">Price</span>
        </div>
        <div className="header-block">
          <span className="remove">Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${totalPrice}</span>
    </div>
  );
};
export default Checkout;
