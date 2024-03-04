import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import { createAppointments } from "../api/appointments";
import { useParams } from "react-router-dom";
import { getBodyZone } from "../api/body";
import { getLaserTypes } from "../api/laser";
import ErrorModal from "../login/ErrorModal";

const Appointments = ({ setAppointment }) => {
  const [state, setState] = useState({
    options: [
      { name: "Option 1️", id: 1 },
      { name: "Option 2️", id: 2 },
    ],
  });
  const [bodyZone, setBodyZone] = useState({ options: [{ name: "", id: 0 }] });
  const [selectedBodyZone, setSelectedBodyZone] = useState();
  const [selectedLaserType, setSelectedLaserType] = useState();
  const [laserTypes, setLaserTypes] = useState({
    options: [{ name: "", id: 0 }],
  });
  const [error, setError] = useState();

  const getBody = async () => {
    try {
      const res = await getBodyZone();
      setBodyZone({ options: res });
    } catch (error) {}
  };

  const getLaser = async () => {
    try {
      const res = await getLaserTypes();
      setLaserTypes({ options: res });
    } catch (error) {
    }
  };

  useEffect(() => {
    getBody();
    getLaser();
  }, []);

  const { id } = useParams();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSelectBodyZone = (e) => {
    const data = [];
    e.forEach((el) => {
      data.push(el.id);
    });
    setSelectedBodyZone(data);
  };

  const onRemoveBodyzone = () => {};

  const onSelect = (e) => {
    setSelectedLaserType(e[0].id);
  };
  const onRemove = () => {};

  const addNewAppointment = async () => {
    const data = {
      patientId: id,
      laserTypeId: selectedLaserType,
      bodyZoneIds: selectedBodyZone,
      dateTime: new Date(),
    };

    try {
      const res = await createAppointments(data);
      setAppointment(res);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Նշանակումներ
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Նշանակումներ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Form.Label>Լազերային տեսակներ</Form.Label>
              <Multiselect
                options={laserTypes.options}
                selectedValues={laserTypes.selectedValue}
                onSelect={onSelect}
                onRemove={onRemove}
                selectionLimit="1"
                displayValue="name"
              />
              <Form.Label>Մարմնի մասեր</Form.Label>
              <Multiselect
                options={bodyZone.options}
                selectedValues={bodyZone.selectedValue}
                onSelect={onSelectBodyZone}
                onRemove={onRemoveBodyzone}
                displayValue="name"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Փակել
          </Button>
          <Button variant="primary" onClick={() => addNewAppointment()}>
            Պահպանել փոփոխությունները
          </Button>
        </Modal.Footer>
        {error && <ErrorModal error={error} setError={setError} />}
      </Modal>
    </>
  );
};

export default Appointments;
