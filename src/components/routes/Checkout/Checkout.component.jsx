import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectTotalPrice,
} from "../../../store/cart/cart.selector";

import CheckoutItem from "../../CheckoutItem/CheckoutItem.component";
import PaymentForm from "../../PaymentForm/PaymentForm.component";

import * as sc from "./Checkout.styles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

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
      <PaymentForm />
    </sc.CheckoutContainer>
  );
};
export default Checkout;
