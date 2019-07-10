import { VER_EQUIPO, CARGAR_DATOS } from "../action-types";
import { API_URL } from "../../utils/configEnv";

export function listarEquipo(equipoId) {
  return function(dispatch) {
    dispatch({ type: CARGAR_DATOS });
    return fetch(API_URL + "/verEquipo/" + equipoId)
      .then(response => response.json())
      .then(json => {
        return dispatch({
          type: VER_EQUIPO,
          payload: json
        });
      });
  };
}
