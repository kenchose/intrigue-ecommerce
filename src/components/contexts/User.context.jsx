// import { createContext, useState, useEffect } from "react";
import { createContext, useReducer, useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const userActionTypes = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  // console.log("action", action);
  const { type, payload } = action;

  switch (type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

const initialState = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(userReducer, initialState);
  const { currentUser } = state;
  // console.log("currentUser", currentUser);

  const setCurrentUser = (user) => {
    dispatch({ type: userActionTypes.SET_CURRENT_USER, payload: user });
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const usubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);
    });

    return usubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
