import "./Form.css";

import { TextField } from "../TextField/TextField";
import { Dropdown } from "../DropDown/Dropdown";
import { Button } from "../Button/Button";

export const Form = () => {
  const teamsList = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    " Inovação e Gestão",
  ];

  return (
    <section className="formulario">
      <form>
        <h1>Preencha os dados para criar o card do colaborador:</h1>
        <br></br>
        <TextField
          label={"Nome"}
          required={true}
          placeholder={"Digite o seu nome"}
        />
        <TextField
          label={"Cargo"}
          required={true}
          placeholder={"Digite o seu cargo"}
        />
        <TextField
          label={"Imagem"}
          required={true}
          placeholder={"Arraste aqui a imagem"}
        />

        <Dropdown items={teamsList} required={true} label={"Time"} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};
