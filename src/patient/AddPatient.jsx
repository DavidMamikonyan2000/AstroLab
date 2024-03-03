import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { addPatient } from "../api/patient";

const AddPatient = () => {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [birthdate, setBirthdate] = useState("");

  console.log(birthdate, "birthdate");

  const addNewPatient = async () => {
    const data = {
      firstName,
      lastName,
      phone,
      username,
      birthdate,
    };
    try {
      const res = await addPatient(data);
      setShow(false);
      console.log(res, "res");
    } catch (error) {}
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="container p-4">
        <Button variant="primary" onClick={handleShow}>
          Ավելացնել հաճախորդ
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ավելացնել հաճախորդ</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Անուն"
                  autoFocus
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Ազգանուն"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="number"
                  placeholder="Հեռախոսահամար"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Օգտագործողի անունը"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="date"
                  placeholder="Ծննդյան օր"
                  onChange={(e) => setBirthdate(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              փակել
            </Button>
            <Button
              variant="primary"
              disabled={!firstName.length}
              onClick={() => addNewPatient()}
            >
              Պահպանել փոփոխությունները
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AddPatient;
