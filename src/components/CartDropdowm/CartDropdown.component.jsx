import Button from "../Button/Button.component";

import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="empty-message">
        <div className="cart-items">
          <Button>GO TO CHECKOUT</Button>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
