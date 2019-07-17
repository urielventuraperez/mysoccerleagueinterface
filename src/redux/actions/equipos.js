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

export function agregarEquipo(equipo, torneoId) {
  return function() {
    return fetch(API_URL + "/torneo/" + torneoId + "/agregarEquipo", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(equipo)
    })
      .then((response) =>
      console.log(response)
        //fetch(API_URL + "/verEquipos").then(response => response.json())
      )
      /*.then(json => {
        return dispatch({
          type: VER_EQUIPOS,
          payload: json
        });
      })*/;
  };
}