import "./Button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, btnType, ...otherProps }) => {
  return (
    <div
      className={`btn-container ${BUTTON_TYPE_CLASSES[btnType]}`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Button;
