import { userActionTypes } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";

// export const setCurrentUser = (user) => ({
//   type: userActionTypes.SET_CURRENT_USER,
//   payload: user,
// });

export const checkUserSession = () =>
  createAction(userActionTypes.CHECK_USER_SESSION);

export const signUpStart = (email, password, displayName) =>
  createAction(userActionTypes.SIGN_UP_START, { email, password, displayName });

export const googleSignInStart = () =>
  createAction(userActionTypes.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
  createAction(userActionTypes.EMAIL_SIGN_IN_START, { email, password });

export const signOutStart = () => createAction(userActionTypes.SIGN_OUT_START);

export const signUpSuccess = (user, additionalDetails) =>
  createAction(userActionTypes.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailed = (error) =>
  createAction(userActionTypes.SIGN_UP_FAILED, error);

export const signInSuccess = (user) =>
  createAction(userActionTypes.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  createAction(userActionTypes.SIGN_IN_FAILED, error);

export const signOutSuccess = () =>
  createAction(userActionTypes.SIGN_OUT_SUCCESS);

export const signOutFailed = (error) =>
  createAction(userActionTypes.SIGN_OUT_FAILED, error);
