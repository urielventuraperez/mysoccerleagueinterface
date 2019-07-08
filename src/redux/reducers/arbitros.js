import {
    VER_ARBITROS, CARGAR_DATOS
  } from "../action-types";
  
  const initialState = {
    arbitros: [],
    cargando: false,
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case CARGAR_DATOS:
        return { ...state, cargando: !state.cargando };
      case VER_ARBITROS:
        return Object.assign(
          { ...state, cargando: false },
          {
            arbitros: [...state.arbitros.concat(action.payload)]
          }
        );
      default:
        return state;
    }
  }
  
  export default reducer;
  