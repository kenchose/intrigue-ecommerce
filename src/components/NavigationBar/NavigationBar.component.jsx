import { Fragment, useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../store/user/user.selector";

import { signOutStart } from "../../store/user/user.action";

import CartIcon from "../CartIcon/CartIcon.component";
import CartDropdown from "../CartDropdowm/CartDropdown.component";

import { ReactComponent as IntrigueLogo } from "../../assets/crown-logo.svg";
import * as sc from "./NavigationBar.styles";

const NavigationBar = () => {
  const currentUser = useSelector(selectCurrentUser);

  const [cartDropdownIsOpen, setCartDropdownIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", closeCartDropdown);
    return () => {
      document.removeEventListener("click", closeCartDropdown);
    };
  }, [cartDropdownIsOpen]);

  const dispatch = useDispatch();

  // const signOutHandler = async () => {
  //   await signOutUser();
  // };

  const signOutHandler = () => dispatch(signOutStart());

  const toggleDropdown = () => {
    setCartDropdownIsOpen(!cartDropdownIsOpen);
  };

  const closeCartDropdown = (event) => {
    if (ref.current && !ref.current.contains(event.target))
      setCartDropdownIsOpen(false);
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
          <CartIcon toggleDropdown={toggleDropdown} ref={ref} />
        </sc.NavLinksContainer>
        {cartDropdownIsOpen && <CartDropdown />}
      </sc.NavContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
