import React, { useEffect, useState } from "react";
import { getPatinetSingleData, updatePatient } from "../api/patient";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import UpdateSinglePatient from "./UpdateSinglePatient";

const PatinetSingle = () => {
  const [patient, setPatient] = useState();
  const { id } = useParams();

  const getPatientData = async () => {
    try {
      const res = await getPatinetSingleData(id);
      setPatient(res);
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    getPatientData();
  }, []);

  console.log(patient, "patient ooooo");

  return (
    <div style={{ padding: "20px" }}>
      <Card border="primary" style={{ width: "18rem" }}>
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

            <Button variant="danger">Ջնջել</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PatinetSingle;
