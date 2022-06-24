import { useState } from "react";
import { useDispatch } from "react-redux";

// import {
//   createAuthUserWithEmailAndPassword,
//   createUserDocFromAuth,
// } from "../../utils/firebase/firebase.utils";
import { signUpStart } from "../../store/user/user.action";

import * as sc from "./SignUpForm.styles";

import FormInput from "../FormInput/FormInput.component";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmationPassword: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmationPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handlSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmationPassword) {
      alert("Password and confirmation password do not match");
      return;
    }

    try {
      // const { user } = await createAuthUserWithEmailAndPassword(
      //   email,
      //   password
      // );

      // await createUserDocFromAuth(user, { displayName });
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("This email address is already in use");
      } else {
        alert("There was an error");
      }
    }
  };

  return (
    <sc.SignUpContainer>
      <sc.SignUpText>Don't have an account?</sc.SignUpText>
      <span>Sign up with your email and password</span>
      <form onSubmit={handlSubmit}>
        <FormInput
          label={"Display Name"}
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />
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
        <FormInput
          label={"Confirmation Password"}
          type="password"
          name="confirmationPassword"
          value={confirmationPassword}
          onChange={handleChange}
          required
        />
        <Button type="submit" btnType={BUTTON_TYPE_CLASSES.base}>
          Create account
        </Button>
      </form>
    </sc.SignUpContainer>
  );
};

export default SignUpForm;
