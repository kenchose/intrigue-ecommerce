// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import {
  // auth,
  signInWithGooglePopup,
  createUserDocFromAuth,
  // signInWithGoogleRedirect,
} from "../../../utils/firebase/firebase.utils";

const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup();
  const userDocRef = await createUserDocFromAuth(user);
};

const Login = () => {
  // showing different methods from firebase for loggin in - signInWithRedirect
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);

  //   if (response) {
  //     const userDocRef = await createUserDocFromAuth(response.user);
  //   }
  // }, []);

  return (
    <div className="sign-in">
      <button onClick={logGoogleUser}>Login with google</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Login with google redirect
      </button> */}
    </div>
  );
};

export default Login;
