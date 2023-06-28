import { formTypes } from "../types";

const { GUARDAR_INVITADO, ENVIAR_INVITACION } = formTypes;

const initialState = {
  invitados: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case GUARDAR_INVITADO:
      return {
        ...state,
        invitados: [...state.invitados, action.payload],
      };
    case ENVIAR_INVITACION:
      // Aquí puedes realizar alguna lógica adicional si es necesario
      return state;
    default:
      return state;
  }
};

export default formReducer;
