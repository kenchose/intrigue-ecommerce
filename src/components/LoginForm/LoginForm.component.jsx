import { useState } from "react";

import {
  signInWithGooglePopup,
  loginWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import * as sc from "./LoginForm.styles";

import FormInput from "../FormInput/FormInput.component";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";

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
          alert("Incorrect email or password");
          break;
        default:
          alert(
            "Sorry, the website is under construction. Please try again later."
          );
      }
    }
  };

  return (
    <sc.LoginContainer>
      <sc.LoginContainerText>Already have an account?</sc.LoginContainerText>
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
        <sc.LoginBtnContainer>
          <Button type="submit">Login</Button>
          <Button
            type="button"
            onClick={loginWithGoogle}
            btnType={BUTTON_TYPE_CLASSES.google}
          >
            Google sign in
          </Button>
        </sc.LoginBtnContainer>
      </form>
    </sc.LoginContainer>
  );
};

export default LoginForm;
