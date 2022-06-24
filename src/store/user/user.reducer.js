import { userActionTypes } from "./user.types";

export const userInitialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = userInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // case userActionTypes.SET_CURRENT_USER:
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case userActionTypes.SIGN_UP_FAILED:
    case userActionTypes.SIGN_IN_FAILED:
    case userActionTypes.SIGN_OUT_FAILED:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
