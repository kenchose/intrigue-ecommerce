import { useContext } from "react";

import { CartContext } from "../contexts/Cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";

import * as sc from "./ProductCard.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

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

  // return (
  //   <div className="product-card-container">
  //     <img src={imageUrl} alt={`${name}`} />
  //     <div className="footer">
  //       <span className="name">{name}</span>
  //       <span className="price">{price}</span>
  //     </div>
  //     <Button btnType="inverted" onClick={addProductToCart}>
  //       Add to cart
  //     </Button>
  //   </div>
  // );
};

export default ProductCard;
