import { FIREBASE_REALTIME_DB_URL } from "../../constants/firebase/index";
import { listTypes } from "../types";

const { CARGAR_INVITADOS, BORRAR_INVITADOS } = listTypes;

export const cargarInvitados = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/invitados.json`);
      const data = await response.json();

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

export const borrarInvitados = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/invitados/${id}.json`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log(`Invitado con ID ${id} eliminado correctamente.`);
        dispatch({
          type: BORRAR_INVITADOS,
          payload: id,
        });
      } else {
        console.error(`Error al eliminar el invitado. Código de respuesta: ${response.status}`);
      }
    } catch (error) {
      console.error("Error al eliminar el invitado:", error);
    }
  };
};
