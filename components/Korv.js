import React from "react";
import { useState } from "react";

function Message(props) {
  return (
    <>
      <div>
        Välj {props.name} !
        <button onClick={() => props.clickMessage(props.name)}>Välj</button>
      </div>
    </>
  );
}
const candidatesArray = [
  { id: 1, name: "Kalle" },
  { id: 2, name: "Nils" },
  { id: 3, name: "Julio" },
];

function Korv() {
  const [chosen, setChosen] = useState("");
  const updateNameOfChosen = (newName) => {
    setChosen(newName);
  };
  return (
    <div className="Korv">
      <div>{chosen === "" ? "Ingen vald" : "Du har valt " + chosen}</div>
      {candidatesArray.map((can) => (
        <Message
          key={can.id}
          name={can.name}
          clickMessage={updateNameOfChosen}
        />
      ))}
    </div>
  );
}

export default Korv;
