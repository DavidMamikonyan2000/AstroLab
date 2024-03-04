import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { filterPatient, findPatient } from "../api/patient";

const FilterPatient = ({ setFilteredPatient }) => {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filterOnlyByDate, setFilterOnlyByDate] = useState("");

  const handleFilterPatient = async () => {
    const data = {
      firstName,
      lastName: lastName || null,
      phone: phone || null,
      username: username || null,
      startDate,
      endDate,
      relevant: true,
    };
    if (!filterOnlyByDate.length) {
      try {
        const res = await filterPatient(data);
        setShow(false);
        setFilteredPatient(res);
      } catch (error) {}
    } else {
      try {
        const res = await findPatient(filterOnlyByDate);
        setShow(false);
        setFilteredPatient(res);
      } catch (error) {}
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="p-4">
      <Button variant="primary" onClick={handleShow}>
        Փնտրել հաճախորդին
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Փնտրել հաճախորդին</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            defaultActiveKey="Փնտրել"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Փնտրել" title="Փնտրել">
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
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="date"
                    placeholder="Ծննդյան օր"
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Tab>
            <Tab eventKey="Փնտրել Ամսաթվով" title="Փնտրել Ամսաթվով">
              <Form>
                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="date"
                    placeholder="Ծննդյան օր"
                    onChange={(e) => setFilterOnlyByDate(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Փակել
          </Button>
          <Button variant="primary" onClick={() => handleFilterPatient()}>
            Պահպանել Փոփոխությունները
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FilterPatient;
