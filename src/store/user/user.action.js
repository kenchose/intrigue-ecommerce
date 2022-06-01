import { userActionTypes } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) =>
  createAction(userActionTypes.SET_CURRENT_USER, user);
