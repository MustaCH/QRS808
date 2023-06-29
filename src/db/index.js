import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("invitados.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS invitados (id INTEGER PRIMARY KEY NOT NULL, nombre TEXT NOT NULL, apellido TEXT NOT NULL, dni TEXT NOT NULL, email TEXT NOT NULL, entradas TEXT NOT NULL)",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const insertInvitado = (nombre, apellido, dni, email, entradas) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO invitados (nombre, apellido, dni, email, entradas) VALUES (?,?,?,?,?)",
        [nombre, apellido, dni, email, entradas],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const selectInvitados = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM invitados",
        [],
        (_, result) => [resolve(result)],
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};
