import {
  VER_TORNEOS,
  CARGAR_DATOS_TORNEO,
  VER_EQUIPOS_TORNEO,
  VER_CATEGORIAS
} from "../action-types";
import { API_URL } from "../../utils/configEnv";

export function verTorneos() {
  return function(dispatch) {
    dispatch({ type: CARGAR_DATOS_TORNEO });
    return fetch(API_URL + "/verTorneos")
      .then(response => response.json())
      .then(json => {
        return dispatch({
          type: VER_TORNEOS,
          payload: json
        });
      });
  };
}

export function agregarTorneo(torneo) {
  return function(dispatch) {
    return fetch(API_URL + "/agregarTorneo", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(torneo)
    })
      .then(() =>
        fetch(API_URL + "/verTorneos").then(response => response.json())
      )
      .then(json => {
        return dispatch({
          type: VER_TORNEOS,
          payload: json
        });
      });
  };
}

export function verEquiposTorneos(torneoId) {
  return function(dispatch) {
    dispatch({ type: CARGAR_DATOS_TORNEO });
    return fetch(API_URL + "/torneo/" + torneoId + "/equipos")
      .then(response => response.json())
      .then(json => {
        return dispatch({
          type: VER_EQUIPOS_TORNEO,
          payload: json
        });
      });
  };
}

//Categorias
export function verCategorias() {
  return function(dispatch) {
    dispatch({ type: CARGAR_DATOS_TORNEO });
    return fetch(API_URL + "/verCategorias")
      .then(response => response.json())
      .then(json => {
        return dispatch({
          type: VER_CATEGORIAS,
          payload: json
        });
      });
  };
}

