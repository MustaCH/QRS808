import { FILTRAR_INVITADOS, CARGAR_INVITADOS } from "../actions/index";

const initialState = {
  invitados: [], // Corrige el nombre de la propiedad repetida
  invitadosFiltrados: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARGAR_INVITADOS:
      return {
        ...state,
        invitados: action.payload,
        invitadosFiltrados: action.payload,
      };
    case FILTRAR_INVITADOS:
      const texto = action.payload.toLowerCase();
      const invitadosFiltrados = state.invitados.filter(
        (invitado) =>
          invitado.nombre.toLowerCase().includes(texto) ||
          invitado.apellido.toLowerCase().includes(texto)
      );
      return { ...state, invitadosFiltrados };
    default:
      return state;
  }
};

export default listReducer;
