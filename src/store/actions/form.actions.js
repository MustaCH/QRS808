import { formTypes } from "../types";
import { FIREBASE_REALTIME_DB_URL } from "../../constants/firebase";

const { GUARDAR_INVITADO, ENVIAR_INVITACION } = formTypes;

export const guardarInvitado = (invitado) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/invitados.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(invitado),
      });

      if (!response.ok) {
        throw new Error("Error al guardar el invitado");
      }

      const data = await response.json();

      const invitadoConId = {
        ...invitado,
        id: data.name, // Utilizamos el ID proporcionado por Firebase
      };

      dispatch({
        type: GUARDAR_INVITADO,
        payload: invitadoConId,
      });
    } catch (error) {
      console.log(error);
      // Manejar el error aquí (por ejemplo, mostrar un mensaje de error al usuario)
    }
  };
};

export const enviarInvitacion = (invitacion) => ({
  type: ENVIAR_INVITACION,
  item: invitacion,
});
