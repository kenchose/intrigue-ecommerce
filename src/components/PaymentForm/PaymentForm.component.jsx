import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectTotalPrice } from "../../store/cart/cart.selector";

import { BUTTON_TYPE_CLASSES } from "../Button/Button.component";

import * as sc from "./PaymentForm.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const amount = useSelector(selectTotalPrice);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment successful");
      }
    }
  };

  return (
    <sc.PaymentFormContainer>
      <sc.FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <sc.PaymentBtn
          disabled={isProcessingPayment}
          isLoading={isProcessingPayment}
          btnType={BUTTON_TYPE_CLASSES.base}
        >
          Pay now
        </sc.PaymentBtn>
      </sc.FormContainer>
    </sc.PaymentFormContainer>
  );
};

export default PaymentForm;
