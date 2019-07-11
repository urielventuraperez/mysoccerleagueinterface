import {
  VER_TORNEOS,
  CARGAR_DATOS_TORNEO,
  VER_EQUIPOS_TORNEO,
  VER_CATEGORIAS,
  VER_RESPONSABLES
} from "../action-types";

const initialState = {
  torneos: [],
  equiposTorneo: [],
  categoriasTorneo: [],
  cargandoTorneo: false,
  responsablesTorneo: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CARGAR_DATOS_TORNEO:
      return { ...state, cargandoTorneo: !state.cargandoTorneo };
    case VER_TORNEOS:
      return Object.assign(
        { ...state, cargandoTorneo: false },
        {
          torneos: action.payload
        }
      );
    case VER_EQUIPOS_TORNEO:
      return Object.assign(
        { ...state, cargandoTorneo: false },
        {
          equiposTorneo: action.payload
        }
      );
    case VER_CATEGORIAS:
      return Object.assign(
        { ...state, cargandoTorneo: false },
        {
          categoriasTorneo: action.payload
        }
      );
    case VER_RESPONSABLES:
      return Object.assign(
        {
          ...state,
          cargandoTorneo: false
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
