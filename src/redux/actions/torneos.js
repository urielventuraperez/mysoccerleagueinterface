import { VER_TORNEOS, CARGAR_DATOS } from "../action-types";

export function verTorneos() {
  return function(dispatch) {
    dispatch({ type: CARGAR_DATOS });
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
