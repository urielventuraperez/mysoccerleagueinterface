import React from "react";

const equiposTorneo = props => {
  const {
    match: { params }
  } = props;
  return (
    <div>
      <h1>Prueba</h1>
      <h2>{ params.torneoId }</h2>
    </div>
  );
};

export default equiposTorneo;
