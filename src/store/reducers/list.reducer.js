import { FILTRAR_INVITADOS, CARGAR_INVITADOS } from "../actions/index";

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
