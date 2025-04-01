import React from "react";
import { Modal } from "react-bootstrap";

const AppModal = ({ title, show, onClose, children, footerButtons }) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title || "Modal"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {footerButtons && (
        <Modal.Footer>
          {footerButtons.map((btn, idx) => (
            <span key={idx}>{btn}</span>
          ))}
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default AppModal;
