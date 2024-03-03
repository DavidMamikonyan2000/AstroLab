import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { userLogin } from "../api/loginRegister";
import ErrorModal from "./ErrorModal";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const show = true;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const res = await userLogin({ username, password });
      localStorage.setItem("accessToken", JSON.stringify(res.accessToken));
      localStorage.setItem("refreshToken", JSON.stringify(res.refreshToken));
      Cookies.set("accessToken", JSON.stringify(res.accessToken));
      Cookies.set("refreshToken", JSON.stringify(res.refreshToken));
      window.location.href = "/";
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Մուտք</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Անուն"
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
          <Button variant="primary" onClick={() => handleLogin()}>
            Մուտք
          </Button>
        </Modal.Footer>
        <Modal.Footer>
          <NavLink to={"/register"}>Գրանցվել</NavLink>
        </Modal.Footer>
      </Modal>
      {error && <ErrorModal error={error} setError={setError} />}
    </>
  );
};

export default Login;
