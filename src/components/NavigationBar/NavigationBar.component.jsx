import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as IntrigueLogo } from "../../assets/crown-logo.svg";

import "./NavigationBar.styles.scss";

const NavigationBar = () => {
  return (
    <Fragment>
      <div className="nav-container">
        <Link className="logo-container" to="/">
          <IntrigueLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            Shop
          </Link>
          <Link className="nav-link" to="login">
            Login
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
