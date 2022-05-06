import SignUpForm from "../../SignUpForm/SignUpForm.component";
import LoginForm from "../../LoginForm/LoginForm.component";

import * as sc from "./Authentication.styles";

const Authentication = () => {
  return (
    <sc.AuthenticationContainer>
      <LoginForm />
      <SignUpForm />
    </sc.AuthenticationContainer>
  );

  // return (
  //   <div className="authentication-container">
  //     <LoginForm />
  //     <SignUpForm />
  //   </div>
  // );
};

export default Authentication;
