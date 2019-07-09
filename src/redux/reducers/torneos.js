import {
    VER_TORNEOS, CARGAR_DATOS_TORNEO
  } from "../action-types";
  
  const initialState = {
    torneos: [],
    cargando: false,
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case CARGAR_DATOS_TORNEO:
        return { ...state, cargando: !state.cargando };
      case VER_TORNEOS:
        return Object.assign(
          { ...state, cargando: false },
          {
            torneos: action.payload
          }
        );
      default:
        return state;
    }
  }
  
  export default reducer;
  