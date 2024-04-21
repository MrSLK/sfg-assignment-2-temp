import { Row } from "antd";
import React, { FunctionComponent } from "react";
import "./ModalDialog.scss";
import ModalDialogButton from "./ModalDialogButton";
import ModalSheet from "./ModalSheet";
import useScreenSize from "./ScreenSizeHook";

// interface ModalDialogProp {
//   title?: string | React.ReactNode;
//   content: React.ReactNode;
//   buttons?: Array<{
//     label: string;
//     variant: string;
//     handler: (a?: any) => void;
//     disabled?: boolean;
//     position?: "left" | "right";
//     type?: "button" | "submit" | "reset";
//     warnigButton?: string;
//   }>;
//   closeHandler: () => void;
//   width?: string;
//   variant?: "primary" | "warning" | "success" | "error";
//   canDataBeLost?: boolean;
//   isFormError?: boolean;
//   footerInfo?: string;
// }

const ModalDialog = ({
  title,
  content,
  buttons = [],
  closeHandler,
  width = "500px",
  variant = "primary",
  canDataBeLost,
  isFormError,
  footerInfo = ""
}) => {
  const { isMobile } = useScreenSize();

  const isError = canDataBeLost || isFormError;
  if (isError) {
    variant = "error";
  }

  const getVariant = () => {
    switch (variant) {
      case "error":
        return "header-variant-error";
      case "warning":
        return "header-variant-warning";
      case "success":
        return "header-variant-success";
      default:
        return "header-variant-primary";
    }
  };

  const renderDialog = () => {
    return (
      <React.Fragment>
        <div className="modal-prompt-backdrop" onClick={closeHandler} />
        <div className={`modal-prompt`} style={{ width: width || "500px", border: isError ? "2px solid #f46363" : "none" }}>
          {typeof title === "string" ? (
            <div className={`modal-prompt-header ${getVariant()}`}>{title}</div>
          ) : (
            <div className={`${getVariant()}`}>{title}</div>
          )}
          <div className="modal-prompt-content">{content}</div>
          <div>
            {!!footerInfo ? (
              <p>
                <i style={{ fontWeight: 300, padding: "0px 20px" }}>{footerInfo}</i>
              </p>
            ) : null}
          </div>
          {buttons.length ? <div className="modal-prompt-footer">{renderFooter()}</div> : null}
        </div>
      </React.Fragment>
    );
  };

  const renderSheet = () => {
    return (
      <ModalSheet
        title={title}
        content={content}
        footer={buttons.length ? renderFooter() : null}
        closeHandler={closeHandler}
        variant={getVariant()}
        isError={isError}
        footerInfo={footerInfo}
      />
    );
  };

  const renderButtons = buttonOptions => {
    return buttonOptions.map((btn, index) => (
      <ModalDialogButton
        key={`modal-button-${index}`}
        label={btn.label}
        variant={btn.variant}
        handler={btn.handler}
        disabled={btn.disabled}
        type={btn.type}
      />
    ));
  };

  const renderFooter = () => {
    return (
      <React.Fragment>
        {buttons && buttons.some(btn => btn.position === "left" || btn.position === "right") ? (
          <React.Fragment>
            {canDataBeLost || isFormError ? (
              <small style={{ flex: 1, color: "#f46363" }}>
                {canDataBeLost ? (
                  <span>&bull; This action will result in loss of information, Are you sure you want to close?</span>
                ) : (
                  isFormError && <span>&bull; Scroll to see missing, required or incorrect information.</span>
                )}
              </small>
            ) : null}

            <div
              className="footer-buttons"
              style={{ display: "flex", justifyContent: "space-between", width: `${canDataBeLost || isFormError ? "auto" : "100%"}` }}
            >
              <div
                className={`left-button-group custom-left-button ${
                  buttons && buttons.some(btn => btn.warnigButton === "orange") && `warning-button-group`
                }`}
              >
                {renderButtons(buttons.filter(btn => btn.position === "left"))}
              </div>
              <div className="right-button-group">{renderButtons(buttons.filter(btn => btn.position === "right"))}</div>
            </div>
          </React.Fragment>
        ) : (
          <Row className="sheet-footer-row">{renderButtons(buttons)}</Row>
        )}
      </React.Fragment>
    );
  };

  return isMobile ? renderSheet() : renderDialog();
};

export default ModalDialog;
