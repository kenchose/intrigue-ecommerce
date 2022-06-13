import * as sc from "./CartItem.styles";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <sc.CartItemContainer>
      <sc.CartItemImage src={imageUrl} alt={`${name}`} />
      <sc.ItemDetails>
        <sc.Name>{name}</sc.Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </sc.ItemDetails>
    </sc.CartItemContainer>
  );
};

export default CartItem;
