import {
  CARGAR_DATOS,
  VER_RESPONSABLES,
  VER_TORNEOS_RESPONSABLE
} from "../action-types";

const initialState = {
  cargando: false,
  responsablesTorneo: [],
  torneosResponsable: []
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
    case VER_TORNEOS_RESPONSABLE:
      return Object.assign({
          ...state
      },
      {
        torneosResponsable: action.payload
      });
    default:
      return state;
  }
}

export default reducer;
