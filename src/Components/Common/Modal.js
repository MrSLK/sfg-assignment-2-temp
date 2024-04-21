import React from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";

export const MainModal = ({
  modalContent,
  title,
  onOk,
  onCancel,
  open,
  cancelText = "Cancel",
  okText = "Okay",
  showCancel = true,
  showOk = true,
  disableOkbtn
}) => {
  return (
    <Modal
      className="custom-modal"
      open={open}
      onCancel={onCancel}
      onOk={onOk}
      cancelText={cancelText}
      okText={okText}
      closable={onCancel}
      cancelButtonProps={{
        style: {
          display: showCancel ? "" : "none"
        }
      }}
      okButtonProps={{
        style: {
          display: showOk ? "" : "none"
        },
        disabled: disableOkbtn
      }}
      title={title}
    >
      <div>{modalContent}</div>
    </Modal>
  );
};

MainModal.propTypes = {
  showCancel: PropTypes.boolean,
  showOk: PropTypes.boolean
};
