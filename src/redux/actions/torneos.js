import { VER_TORNEOS, CARGAR_DATOS_TORNEO, VER_EQUIPOS_TORNEO } from "../action-types";

export function verTorneos() {
  return function(dispatch) {
    dispatch({ type: CARGAR_DATOS_TORNEO });
    return fetch("http://127.0.0.1:8000/api/verTorneos")
      .then(response => response.json())
      .then(json => {
        return dispatch({
          type: VER_TORNEOS,
          payload: json
        });
      });
  };
}

export function verEquiposTorneos( torneoId ) {
  return function(dispatch) {
    dispatch({ type: CARGAR_DATOS_TORNEO });
    return fetch("http://127.0.0.1:8000/api/torneo/"+ torneoId +"/equipos")
      .then(response => response.json())
      .then(json => {
        return dispatch({
          type: VER_EQUIPOS_TORNEO,
          payload: json
        });
      });
  };
}
