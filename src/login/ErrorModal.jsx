import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const ErrorModal = ({ error, setError }) => {
  const [isShow, setShow] = useState(error);

  useEffect(() => {
    setShow(error);
  }, [error]);

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "absolute" }}
    >
      <Modal show={isShow}>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Սխալ</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                setShow(null);
                setError(null);
              }}
            >
              փակել
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
};

export default ErrorModal;
