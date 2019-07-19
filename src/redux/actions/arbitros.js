import {
  VER_ARBITROS,
  CARGAR_DATOS,
  VER_ARBITROS_TORNEO
} from "../action-types";
import { API_URL } from "../../utils/configEnv";

export function verArbitros() {
  return function(dispatch) {
    dispatch({ type: CARGAR_DATOS });
    return fetch(API_URL + "/arbitros/todos")
      .then(response => response.json())
      .then(json => {
        return dispatch({
          type: VER_ARBITROS,
          payload: json
        });
      });
  };
}

export function verArbitrosTorneo($idTorneo) {
  return function(dispatch) {
    dispatch({ type: CARGAR_DATOS });
    return fetch(API_URL + "/torneo/" + $idTorneo + "/arbitros")
      .then(response => response.json())
      .then(json => {
        return dispatch({
          type: VER_ARBITROS_TORNEO,
          payload: json
        });
      });
  };
}
