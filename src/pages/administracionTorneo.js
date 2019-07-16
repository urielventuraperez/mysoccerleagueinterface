import React from "react";

const administracionTorneo = props => {
  const {
    match: { params }
  } = props;

  return <div>Hello, {params.torneoId}</div>;
};

export default administracionTorneo;
