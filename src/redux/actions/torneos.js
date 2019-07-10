import {
  VER_TORNEOS,
  CARGAR_DATOS_TORNEO,
  VER_EQUIPOS_TORNEO
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

export function verEquiposTorneos(torneoId) {
  return function(dispatch) {
    dispatch({ type: CARGAR_DATOS_TORNEO });
    return fetch(API_URL+"/torneo/" + torneoId + "/equipos")
      .then(response => response.json())
      .then(json => {
        return dispatch({
          type: VER_EQUIPOS_TORNEO,
          payload: json
        });
      });
  };
}
