import { FIREBASE_REALTIME_DB_URL } from "../../constants/firebase/index";
import { listTypes } from "../types";

const { CARGAR_INVITADOS, FILTRAR_INVITADOS } = listTypes;

export const cargarInvitados = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/invitados.json`);
      const data = await response.json();

      //console.warn(data);

      if (data) {
        const invitados = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        dispatch({
          type: CARGAR_INVITADOS,
          payload: invitados,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const filtrarInvitados = (texto) => {
  return { type: FILTRAR_INVITADOS, payload: texto };
};
