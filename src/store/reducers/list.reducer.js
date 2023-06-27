import { listTypes } from "../types";

const { CARGAR_INVITADOS, FILTRAR_INVITADOS } = listTypes;

const initialState = {
  invitados: [],
};

const guestListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARGAR_INVITADOS:
      console.warn(action.payload);
      return {
        ...state,
        invitados: action.payload,
      };
    default:
      return state;
  }
};

export default guestListReducer;
