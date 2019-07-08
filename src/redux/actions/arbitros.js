import {
    VER_ARBITROS, CARGAR_DATOS
  } from "../action-types";
  
  export function listaArbitros() {
    return function(dispatch) {
      dispatch({ type: CARGAR_DATOS });
      return fetch("https://akabab.github.io/superhero-api/api/all.json")
        .then(response => response.json())
        .then(json => {
          return dispatch({
            type: VER_ARBITROS,
            payload: json
          });
        });
    };
  }
  
