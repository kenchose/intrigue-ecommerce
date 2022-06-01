// import { createContext, useState, useEffect, useReducer } from "react";
// import { userActionTypes } from "../../store/user/user.types";

// import {
//   onAuthStateChangedListener,
//   createUserDocFromAuth,
// } from "../../utils/firebase/firebase.utils";

// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });
// const initialState = {
//   currentUser: null,
// };

// const userReducer = (state, action) => {
//   // console.log("action", action);
//   const { type, payload } = action;

//   switch (type) {
//     case userActionTypes.SET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: payload,
//       };
//     default:
//       throw new Error(`Unhandled type ${type} in userReducer`);
//   }
// };

// export const UserProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(userReducer, initialState);
//   const { currentUser } = state;

//   const setCurrentUser = (user) => {
//     dispatch({ type: userActionTypes.SET_CURRENT_USER, payload: user });
//   };

//   const value = { currentUser, setCurrentUser };

//   // useEffect(() => {
//   //   const usubscribe = onAuthStateChangedListener((user) => {
//   //     if (user) {
//   //       createUserDocFromAuth(user);
//   //     }
//   //     setCurrentUser(user);
//   //   });

//   //   return usubscribe;
//   // }, []);

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
