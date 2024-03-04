import React, { useEffect, useState } from "react";
import { getPatinetSingleData, updatePatient } from "../api/patient";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import UpdateSinglePatient from "./UpdateSinglePatient";
import Appointments from "./Appointments";

const PatinetSingle = () => {
  const [patient, setPatient] = useState();
  const { id } = useParams();
  const [appointment, setAppointment] = useState();

  const getPatientData = async () => {
    try {
      const res = await getPatinetSingleData(id);
      setPatient(res);
    } catch (error) {
    }
  };

  useEffect(() => {
    getPatientData();
  }, []);

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      <Card border="primary" style={{ width: "25rem", marginBottom: "10px" }}>
        <Card.Header>հաճախորդ</Card.Header>
        <Card.Body>
          <Card.Title>
            {patient?.firstName} {patient?.lastName}
          </Card.Title>
          <Card.Text>
            {patient?.username} - {patient?.phone}
          </Card.Text>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <UpdateSinglePatient />
            <Appointments setAppointment={setAppointment} />
            <Button variant="danger">Ջնջել</Button>
          </div>
        </Card.Body>
      </Card>

      {appointment && (
        <Card border="primary" style={{ width: "25rem" }}>
          <Card.Header>Նշանակումներ</Card.Header>
          <Card.Body>
            <Card.Title>{appointment && appointment.laserType.name}</Card.Title>
            {appointment?.bodyZones.map((item) => (
              <Card.Text key={item.id}>{item.name}</Card.Text>
            ))}
            <Card.Text>{appointment?.price}</Card.Text>
            <Card.Text>{appointment?.discountPrice}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default PatinetSingle;
