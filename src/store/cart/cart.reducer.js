import { cartActionTypes } from "./cart.types";

export const cartInitialState = {
  isCartOpen: false,
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
    case cartActionTypes.SET_IS_CART_OPEN: {
      return {
        ...state,
        isCartOpen: payload,
      };
    }
    default:
      return state;
  }
};
