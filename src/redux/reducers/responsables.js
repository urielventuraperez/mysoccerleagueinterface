import {
    CARGAR_DATOS,
    VER_RESPONSABLES
  } from "../action-types";
  
  const initialState = {
    cargando: false,
    responsablesTorneo: []
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case CARGAR_DATOS:
        return { ...state, cargando: !state.cargando };
      case VER_RESPONSABLES:
        return Object.assign(
          {
            ...state,
            cargando: false
          },
          {
            responsablesTorneo: action.payload
          }
        );
      default:
        return state;
    }
  }
  
  export default reducer;
  