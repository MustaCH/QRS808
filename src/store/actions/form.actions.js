import { formTypes } from "../types";
import { FIREBASE_REALTIME_DB_URL } from "../../constants/firebase";
import { sendEmail } from "../../utils/mailer";

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
