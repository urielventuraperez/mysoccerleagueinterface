import {
  VER_ARBITROS,
  CARGAR_DATOS,
  VER_ARBITROS_TORNEO
} from "../action-types";

const initialState = {
  arbitros: [],
  arbitrosTorneo: [],
  cargando: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CARGAR_DATOS:
      return { ...state, cargando: !state.cargando };
    case VER_ARBITROS:
      return Object.assign(
        {
          ...state,
          cargando: false
        },
        {
          arbitros: action.payload
        }
      );
    case VER_ARBITROS_TORNEO:
      return Object.assign(
        {
          ...state,
          cargando: false
        },
        {
          arbitrosTorneo: action.payload
        }
      );
    default:
      return state;
  }
}

export default reducer;
