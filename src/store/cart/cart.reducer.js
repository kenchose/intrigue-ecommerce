import { cartActionTypes } from "./cart.types";

export const cartInitialState = {
  cartItems: [],
};

export const cartReducer = (state = cartInitialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case cartActionTypes.SET_CART_ITEMS: {
      return {
        ...state,
        cartItems: payload,
      };
    }
    default:
      return state;
  }
};
