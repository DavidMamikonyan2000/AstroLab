import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { userRegister } from "../api/loginRegister";
import ErrorModal from "../login/ErrorModal";
import { useNavigate } from "react-router-dom";

// "name": "string",
//   "surname": "string",
//   "username": "string",
//   "password": "string"

const Register = () => {
  const show = true;
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await userRegister({ name, surname, username, password });
      navigate("/login");
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Գրանցվել</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Անուն"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Ազգանուն"
                autoFocus
                onChange={(e) => setSurname(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Օգտագործողի անունը"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="password"
                placeholder="գաղտնաբառ"
                autoFocus
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handleRegister()}>
            Մուտք
          </Button>
        </Modal.Footer>
      </Modal>
      {error && <ErrorModal error={error} setError={setError} />}
    </>
  );
};

export default Register;
