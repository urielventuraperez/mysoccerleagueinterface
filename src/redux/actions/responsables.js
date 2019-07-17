import {
    CARGAR_DATOS_TORNEO,
    VER_RESPONSABLES
  } from "../action-types";
  import { API_URL } from "../../utils/configEnv";

  //Responsables
  export function verResponsables() {
    return function(dispatch) {
      dispatch({ type: CARGAR_DATOS_TORNEO });
      return fetch(API_URL + "/responsables/torneo")
        .then(response => response.json())
        .then(json => {
          return dispatch({
            type: VER_RESPONSABLES,
            payload: json
          });
        });
    };
  }