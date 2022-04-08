import SignUpForm from "../../SignUpForm/SignUpForm.component";
import LoginForm from "../../LoginForm/LoginForm.component";

import "./Authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <LoginForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
