import React from "react";
import { Modal } from "react-bootstrap";

const CreateModal = ({ title, show, onClose, children }) => {    
    return (
      <Modal show={show} onHide={onClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title || "Modal"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    );
  };
export default CreateModal;