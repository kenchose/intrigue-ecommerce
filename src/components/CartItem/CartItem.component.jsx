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

  // return (
  //   <div className="cart-item-container">
  //     <img src={imageUrl} alt={`${name}`} />
  //     <div className="item-details">
  //       <span className="name">{name}</span>
  //       <span className="price">
  //         {quantity} x ${price}
  //       </span>
  //     </div>
  //   </div>
  // );
};

export default CartItem;
