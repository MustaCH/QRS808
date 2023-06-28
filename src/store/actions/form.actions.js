import { formTypes } from "../types";
import { FIREBASE_REALTIME_DB_URL } from "../../constants/firebase";
import { enviarCorreo } from "../../utils/functions";

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
        id: data.name,
      };

      dispatch({
        type: GUARDAR_INVITADO,
        payload: invitadoConId,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const enviarInvitacion = (invitacion) => {
  return async (dispatch) => {
    try {
      // Guardar el invitado en la lista de invitados
      dispatch(guardarInvitado(invitacion));

      // Enviar el correo de invitación al invitado
      await enviarCorreo(invitacion);

      dispatch({
        type: ENVIAR_INVITACION,
        item: invitacion,
      });
    } catch (error) {
      console.error("Error al enviar la invitación:", error);
      // Manejar el error aquí (por ejemplo, mostrar un mensaje de error al usuario)
    }
  };
};
