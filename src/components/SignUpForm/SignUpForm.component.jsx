import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocuFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./SignUpForm.styles.scss";

import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmationPassword: "",
};

const SignUpForm = () => {
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
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocuFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("This email address is already in use");
      } else {
        console.log("There was an error", error.message);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
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
        <Button type="submit" btnType="">
          Create account
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
