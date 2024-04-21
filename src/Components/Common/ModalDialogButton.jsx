import PropTypes from "prop-types";
import React from "react";
import "./ModalDialog.scss";

const ModalDialogButton = ({ label, type = "button", variant, handler, disabled }) => {
  return (
    <button type={type} className={variant === "outlined" ? "btn-outlined" : "btn-contained"} onClick={handler} disabled={disabled}>
      {label}
    </button>
  );
};

ModalDialogButton.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.oneOfType([PropTypes.array])
};

export default ModalDialogButton;
