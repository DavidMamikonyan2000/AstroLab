import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const BodyPart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="container p-4">
        <Button variant="primary" onClick={handleShow}>
          Մարմնի մասեր
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Մարմնի մասեր</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" placeholder="Անուն" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" placeholder="Ազգանուն" />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="number" placeholder="Հեռախոսահամար" />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" placeholder="Օգտագործողի անունը" />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="date" placeholder="Ծննդյան օր" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              փակել
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Պահպանել փոփոխությունները
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default BodyPart;
