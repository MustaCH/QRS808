import { formTypes } from "../types";

const { GUARDAR_INVITADO, ENVIAR_INVITACION } = formTypes;

const initialState = {
  invitados: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case GUARDAR_INVITADO: {
      const { result } = action.payload;

      return {
        ...state,
        invitados: [...state.invitados, result.items],
      };
    }
    default:
      return state;
  }
};

export default formReducer;
