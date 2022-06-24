import { userActionTypes } from "./user.types";
// import { createAction } from "../../utils/reducer/reducer.utils";

// export const setCurrentUser = (user) => ({
//   type: userActionTypes.SET_CURRENT_USER,
//   payload: user,
// });

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});

export const signUpStart = (email, password, displayName) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: { email, password, displayName },
});

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (email, password) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: { email, password },
});

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});

export const signUpSuccess = (user, additionalDetails) => ({
  type: userActionTypes.SIGN_UP_SUCCCESS,
  payload: { user, additionalDetails },
});

export const signUpFailed = (error) => ({
  type: userActionTypes.SIGN_UP_FAILED,
  payload: error,
});

export const signInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailed = (error) => ({
  type: userActionTypes.SIGN_IN_FAILED,
  payload: error,
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailed = (error) => ({
  type: userActionTypes.SIGN_OUT_FAILED,
  payload: error,
});
