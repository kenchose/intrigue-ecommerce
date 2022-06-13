import * as sc from "./FormInput.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <sc.Group>
      <sc.FormInput {...otherProps} />
      {label && (
        <sc.FormInputLabel shrink={otherProps.value.length}>
          {label}
        </sc.FormInputLabel>
      )}
    </sc.Group>
  );
};

export default FormInput;
