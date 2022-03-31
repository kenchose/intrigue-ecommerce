import { signInWithGooglePopup } from "../../../utils/firebase/firebase.utils";

const logGoogleUser = async () => {
  const response = await signInWithGooglePopup();
  console.log(response);
};

const Login = () => {
  return (
    <div className="sign-in">
      <button onClick={logGoogleUser}>Login with google</button>
    </div>
  );
};

export default Login;
