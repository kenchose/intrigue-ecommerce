import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";

import CheckoutItem from "../../CheckoutItem/CheckoutItem.component";

import * as sc from "./Checkout.styles";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <sc.CheckoutContainer>
      <sc.CheckoutHeader>
        <sc.HeaderBlock>
          <span className="product">Product</span>
        </sc.HeaderBlock>
        <sc.HeaderBlock>
          <span className="description">Description</span>
        </sc.HeaderBlock>
        <sc.HeaderBlock>
          <span className="quantity">Quantity</span>
        </sc.HeaderBlock>
        <sc.HeaderBlock>
          <span className="price">Price</span>
        </sc.HeaderBlock>
        <sc.HeaderBlock>
          <span className="remove">Remove</span>
        </sc.HeaderBlock>
      </sc.CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <sc.Total>Total: ${totalPrice}</sc.Total>
    </sc.CheckoutContainer>
  );

  // return (
  //   <div className="checkout-container">
  //     <div className="checkout-header">
  //       <div className="header-block">
  //         <span className="product">Product</span>
  //       </div>
  //       <div className="header-block">
  //         <span className="description">Description</span>
  //       </div>
  //       <div className="header-block">
  //         <span className="quantity">Quantity</span>
  //       </div>
  //       <div className="header-block">
  //         <span className="price">Price</span>
  //       </div>
  //       <div className="header-block">
  //         <span className="remove">Remove</span>
  //       </div>
  //     </div>
  //     {cartItems.map((cartItem) => (
  //       <CheckoutItem key={cartItem.id} cartItem={cartItem} />
  //     ))}
  //     <span className="total">Total: ${totalPrice}</span>
  //   </div>
  // );
};
export default Checkout;
