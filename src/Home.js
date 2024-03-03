import React, { useEffect, useState, useSyncExternalStore } from "react";
import AddPatient from "./patient/AddPatient";
import FilterPatient from "./patient/FilterPatient";
import SaleForPatient from "./patient/SaleForPatient";
import BodyPart from "./patient/BodyPart";
import LazerTypes from "./patient/LazerTypes";
import ShowPatients from "./patient/ShowPatients";
import { patientStore } from "./store/patientStore";

const Home = () => {
  const [filteredPatient, setFilteredPatient] = useState();
  useSyncExternalStore(patientStore.subscribe, patientStore.getSnapshot);

  useEffect(() => {
    patientStore.keepPatient(filteredPatient);
  }, [filteredPatient]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#!">
            AstroLab
          </a>
        </div>
      </nav>
      <div className="d-flex justify-content-between flex-wrap">
        <AddPatient />
        <FilterPatient setFilteredPatient={setFilteredPatient} />
        <SaleForPatient />
        <BodyPart />
        <LazerTypes />
      </div>
      <div className="container col-md-12">
        <hr />
        <h2 style={{ color: "#0d6efd" }}>Հաճախորդներ</h2>
        <ShowPatients filteredPatient={filteredPatient} />
      </div>
    </>
  );
};

export default Home;
