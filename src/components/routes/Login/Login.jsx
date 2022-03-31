import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../../utils/firebase/firebase.utils";

const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup();
  const userDocRef = await createUserDocFromAuth(user);
};

const Login = () => {
  return (
    <div className="sign-in">
      <button onClick={logGoogleUser}>Login with google</button>
    </div>
  );
};

export default Login;
