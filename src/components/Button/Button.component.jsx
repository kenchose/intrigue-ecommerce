import * as sc from "./Button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (btnType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: sc.BaseBtn,
    [BUTTON_TYPE_CLASSES.google]: sc.GoogleBtn,
    [BUTTON_TYPE_CLASSES.inverted]: sc.InvertedBtn,
  }[btnType]);

const Button = ({ children, btnType, ...otherProps }) => {
  const CustomButton = getButton(btnType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;

  // return (
  //   <button
  //     className={`btn-container ${BUTTON_TYPE_CLASSES[btnType]}`}
  //     {...otherProps}
  //   >
  //     {children}
  //   </button>
  // );
};

export default Button;
