import React from "react";
import { Modal, Button } from "react-bootstrap";

const ConfirmModal = ({ show, title, message, onCancel, onConfirm }) => {
  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title || "Are you sure?"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message || "Do you really want to proceed?"}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;