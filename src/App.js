import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

// import {
//   getCurrentUser,
//   onAuthStateChangedListener,
//   createUserDocFromAuth,
// } from "./utils/firebase/firebase.utils";

// import { setCurrentUser } from "./store/user/user.action";
import { checkUserSession } from "./store/user/user.action.js";

import Authentication from "./components/routes/Authentication/Authentication.jsx";
import NavigationBar from "./components/NavigationBar/NavigationBar.component.jsx";
import Shop from "./components/routes/Shop/Shop.component.jsx";
import Home from "./components/routes/Home/Home.component.jsx";
import Checkout from "./components/routes/Checkout/Checkout.component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    // getCurrentUser().then((user) => console.log(user));
    // const unsubscribe = onAuthStateChangedListener((user) => {
    //   console.log();
    //   if (user) {
    //     createUserDocFromAuth(user);
    //   }
    //   dispatch(setCurrentUser(user));
    // });

    // return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
