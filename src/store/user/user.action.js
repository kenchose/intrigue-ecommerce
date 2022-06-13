import { userActionTypes } from "./user.types";
// import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});
