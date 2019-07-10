import { VER_EQUIPO, CARGAR_DATOS } from "../action-types";

const initialState = {
  equipo: [],
  cargandoEquipo: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CARGAR_DATOS:
      return { ...state, cargandoEquipo: !state.cargandoEquipo };
    case VER_EQUIPO:
      return Object.assign(
        { ...state, cargandoEquipo: false },
        {
          equipo: action.payload
        }
      );
    default:
      return state;
  }
}

export default reducer;
