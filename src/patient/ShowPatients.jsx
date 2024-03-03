import React, { useState } from "react";
import { getPatients } from "../api/patient";
import { Link } from "react-router-dom";

const ShowPatients = ({ filteredPatient }) => {
  console.log(filteredPatient, "filteredPatient");
  return (
    <div>
      {filteredPatient &&
        filteredPatient.map((user) => (
          <Link
            to={`/patient/${user.id}`}
            style={{ color: "orange", fontWeight: "bold" }}
            key={user.id}
          >
            <p>
              {user.firstName} {user.lastName} - {user.phone}
            </p>
          </Link>
        ))}
    </div>
  );
};

export default ShowPatients;
