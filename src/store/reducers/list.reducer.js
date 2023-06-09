import { listTypes } from "../types";

const { CARGAR_INVITADOS, BORRAR_INVITADOS } = listTypes;

const initialState = {
  invitados: [],
};

const guestListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARGAR_INVITADOS:
      return {
        ...state,
        invitados: action.payload,
      };
    case BORRAR_INVITADOS:
      return {
        ...state,
        invitados: state.invitados.filter((invitado) => invitado.key !== action.invitadoId),
      };
    default:
      return state;
  }
};

export default guestListReducer;
