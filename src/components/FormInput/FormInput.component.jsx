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

  //   return (
  //     <div className="group">
  //       <input className="form-input" {...otherProps} />
  //       {label ? (
  //         <label
  //           className={`${
  //             otherProps.value.length ? "shrink" : ""
  //           } form-input-label`}
  //         >
  //           {label}
  //         </label>
  //       ) : null}
  //     </div>
  //   );
};

export default FormInput;
