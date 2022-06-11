import { useState } from "react";
import { db } from "./db.js";
export function AddBoxeurForm(
  { defaultClassement } = { defaultClassement: 0 }
) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [classsement, setClassement] = useState(defaultClassement);
  const [status, setStatus] = useState("");

  async function addBoxeur() {
    try {
      // Add the new friend!
      const id = await db.boxeurs.add({
        nom,
        prenom,
        classsement,
      });

      setStatus(`Friend ${nom} successfully added. Got id ${id}`);
      setNom("");
      setPrenom("");
      setClassement(defaultClassement);
    } catch (error) {
      setStatus(`Failed to add ${nom}: ${error}`);
    }
  }

  return (
    <>
      <p>{status}</p>
      Nom :
      <input
        type="text"
        value={nom}
        onChange={(ev) => setNom(ev.target.value)}
      />
      Prenom :
      <input
        type="text"
        value={prenom}
        onChange={(ev) => setPrenom(ev.target.value)}
      />
      Classsement :
      <input
        type="number"
        value={classsement}
        onChange={(ev) => setClassement(Number(ev.target.value))}
      />
      <button onClick={addBoxeur}>Add</button>
    </>
  );
}
