import Dexie from "dexie";

export const db = new Dexie("test2");
db.version(1).stores({
  boxeurs: "++numLicence, nom, prenom, classement", // Primary key and indexed props
  pays: "nom, code, drapeau",
  clubs: "ville, nom",
  rencontres: "point1, point2, boxeur1, boxeur2",
});
