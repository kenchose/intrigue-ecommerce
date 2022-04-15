import { useState } from "react";

import {
  signInWithGooglePopup,
  loginWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./LoginForm.styles.scss";

import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const loginWithGoogle = async () => {
    await signInWithGooglePopup();
    // await createUserDocuFromAuth(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await loginWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect email or password");
          break;
        case "auth/user-not-found":
          alert("Email not registered");
          break;
        default:
          console.log("There was an error logging in");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Already have an account?</h2>
      <span>Login with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label={"Password"}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="login-btn-container">
          <Button type="submit">Login</Button>
          <Button type="button" onClick={loginWithGoogle} btnType="google">
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
