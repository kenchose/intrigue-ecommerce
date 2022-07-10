import { createSelector } from "reselect";

export const selectorCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectorCartReducer],
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector([selectCartItems], (cartCount) =>
  cartCount.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectTotalPrice = createSelector(
  [selectCartItems],
  (totalPrice) =>
    totalPrice.reduce(
      (totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity,
      0
    )
);
