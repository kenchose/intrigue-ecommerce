import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as IntrigueLogo } from "../../assets/crown-logo.svg";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../contexts/User.context";

import "./NavigationBar.styles.scss";

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <div className="nav-container">
        <Link className="logo-container" to="/">
          <IntrigueLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="auth">
              LOGIN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
