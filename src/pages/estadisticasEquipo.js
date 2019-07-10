import React, { useEffect } from "react";
import { connect } from "react-redux";
import { listarEquipo } from "../redux/actions/equipos";

const EstadisticasEquipo = props => {
  const {
    match: { params }
  } = props;

  useEffect(() => {
    props.listarEquipo(params.equipoId);
  }, []);

  return <div>{params.equipoId}</div>;
};

const mapStateToProps = state => {
  return {
    equipo: state.equipos.equipo,
    cargandoEquipo: state.equipos.cargandoEquipo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listarEquipo: equipoId => dispatch(listarEquipo(equipoId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EstadisticasEquipo);
