import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selector";

import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";

import * as sc from "./ProductCard.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <sc.ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <sc.Footer>
        <sc.Name>{name}</sc.Name>
        <sc.Price>{price}</sc.Price>
      </sc.Footer>
      <Button btnType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
    </sc.ProductCardContainer>
  );
};

export default ProductCard;
