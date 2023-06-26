import { formTypes } from "../types";

const { GUARDAR_INVITADO, ENVIAR_INVITACION } = formTypes;

export const guardarInvitado = (invitado) => {
  return async (dispatch) => {
    try {
      const response = await fetch("${FIREBASE_REALTIME_DB_URL}/invitados.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Date.now(),
          items: invitado,
        }),
      });

      const result = await response.json();

      dispatch({
        type: GUARDAR_INVITADO,
        result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const enviarInvitacion = (invitacion) => ({
  type: ENVIAR_INVITACION,
  item: invitacion,
});
