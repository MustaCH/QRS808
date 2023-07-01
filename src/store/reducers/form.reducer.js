import { formTypes } from "../types";

const { GUARDAR_INVITADO } = formTypes;

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
  }
};

export default formReducer;
