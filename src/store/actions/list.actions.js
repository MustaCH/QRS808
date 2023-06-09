import { listTypes } from "../types";
import { Alert } from "react-native";
import { FIREBASE_REALTIME_DB_URL } from "../../constants/firebase/index";

const { CARGAR_INVITADOS, BORRAR_INVITADOS } = listTypes;

export const cargarInvitados = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/invitados.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      const invitados = Object.keys(data).map((key) => ({
        ...data[key],
        id: key,
      }));

      dispatch({
        type: CARGAR_INVITADOS,
        payload: invitados,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const borrarInvitados = (key) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/invitados/${key}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      const invitados = Object.keys(data).map((key) => ({
        ...data[key],
        id: key,
      }));

      dispatch({
        type: BORRAR_INVITADOS,
        invitadoId: invitados,
      });
    } catch (error) {
      Alert.alert("Error al eliminar el invitado:", error);
    }
  };
};
