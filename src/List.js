import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./db.js";

export function BoxeurList() {
  const boxeurs = useLiveQuery(() => db.boxeurs.toArray());

  return (
    <ul>
      {boxeurs?.map((boxeur) => (
        <li key={boxeur.id}>
          {boxeur.nom}, {boxeur.prenom}, {boxeur.classement}
        </li>
      ))}
    </ul>
  );
}
