import { FIREBASE_REALTIME_DB_URL } from "../../constants/firebase/index";

// Acción para cargar los invitados desde Realtime Database
export const cargarInvitados = () => {
  return (dispatch) => {
    FIREBASE_REALTIME_DB_URL.ref("invitados").on("value", (snapshot) => {
      const invitados = snapshot.val();
      dispatch({ type: CARGAR_INVITADOS, payload: invitados });
    });
  };
};

// Acción para filtrar los invitados por nombre
export const filtrarInvitados = (texto) => {
  return { type: FILTRAR_INVITADOS, payload: texto };
};
