import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserDocuFromAuth,
} from "../../utils/firebase/firebase.utils";

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const usubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocuFromAuth(user);
      }
      setCurrentUser(user);
      console.log(user);
    });

    return usubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
