import "./Form.css";

import { useState } from "react";

import { TextField } from "../TextField/TextField";
import { Dropdown } from "../DropDown/Dropdown";
import { Button } from "../Button/Button";

export const Form = ({ addCollaborator, teams }) => {
  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const addCollaboratorAndClearForm = (e) => {
    addCollaborator(
      { name: name, office: office, image: image, team: team },
      e
    );
    setName("");
    setOffice("");
    setImage("");
    setTeam("");
  };

  return (
    <section className="formulario">
      <form onSubmit={addCollaboratorAndClearForm}>
        <h1>Preencha os dados para criar o card do colaborador:</h1>
        <br></br>

        <TextField
          label={"Nome"}
          required={true}
          placeholder={"Digite o seu nome"}
          value={name}
          enteredValue={setName}
        />
        <TextField
          label={"Cargo"}
          required={true}
          placeholder={"Digite o seu cargo"}
          value={office}
          enteredValue={setOffice}
        />
        <TextField
          label={"Imagem"}
          required={true}
          placeholder={"Arraste aqui a imagem"}
          value={image}
          enteredValue={setImage}
        />

        <Dropdown
          items={teams}
          required={true}
          label={"Time"}
          value={team}
          enteredValue={setTeam}
        />
        <br></br>

        <Button>Criar Card</Button>
      </form>
    </section>
  );
};
