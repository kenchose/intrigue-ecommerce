import { useDispatch, useSelector } from "react-redux";

import {
  selectCartCount,
  // selectIsCartOpen,
} from "../../store/cart/cart.selector";
// import { setIsCartOpen } from "../../store/cart/cart.actions";

import * as sc from "./CartIcon.styles";

const CartIcon = () => {
  // const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  // const cartOpen = useSelector(selectIsCartOpen);
  // const toggleIsCartOpen = () => dispatch(setIsCartOpen(!cartOpen));

  // useEffect(() => {
  //   document.addEventListener("mousedown", toggleIsCartOpen, false);
  //   return () => {
  //     document.addEventListener("mousedown", toggleIsCartOpen, false);
  //   };
  // }, []);

  // const toggleIsCartOpen = () => setOpenDropdownList(!openDropdownList);

  // const toggleIsCartOpen = (event) => {
  //   if (dropdownList.current && !dropdownList.current.contains(event.target)) {
  //     console.log("what is current", dropdownList.current);
  //     console.log("wht is contain", dropdownList.contains(event.target));
  //     setOpenDropdownList(!openDropdownList);
  //   }
  //   console.log("what is dropdown after click", openDropdownList);
  // };

  return (
    <sc.CartIconContainer>
      {/* <sc.CartIconContainer onClick={toggleIsCartOpen}>  */}
      <sc.ShoppingIcon />
      <sc.ItemCount>{cartCount}</sc.ItemCount>
    </sc.CartIconContainer>
  );
};

export default CartIcon;
