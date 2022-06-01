import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../contexts/Cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";

import CartIcon from "../CartIcon/CartIcon.component";
import CartDropdown from "../CartDropdowm/CartDropdown.component";

import { ReactComponent as IntrigueLogo } from "../../assets/crown-logo.svg";
import * as sc from "./NavigationBar.styles";

const NavigationBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <sc.NavContainer>
        <sc.LogoContainer to="/">
          <IntrigueLogo className="logo" />
        </sc.LogoContainer>
        <sc.NavLinksContainer>
          <sc.NavLink to="shop">SHOP</sc.NavLink>
          {currentUser ? (
            <sc.NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </sc.NavLink>
          ) : (
            <sc.NavLink to="auth">LOGIN</sc.NavLink>
          )}
          <CartIcon />
        </sc.NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </sc.NavContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
