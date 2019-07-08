import {
    VER_TORNEOS, CARGAR_DATOS
  } from "../action-types";
  
  const initialState = {
    torneos: [],
    cargando: false,
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case CARGAR_DATOS:
        return { ...state, cargando: !state.cargando };
      case VER_TORNEOS:
        return Object.assign(
          { ...state, cargando: false },
          {
            torneos: [...state.torneos.concat(action.payload)]
          }
        );
      default:
        return state;
    }
  }
  
  export default reducer;
  