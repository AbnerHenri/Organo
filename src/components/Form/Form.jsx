import "./Form.css";

import { TextField } from "../TextField/TextField";

export const Form = () => {
  return (
    <section className="formulario">
      <form>
        <h1>Preencha os dados para criar o card do colaborador:</h1>
        <br></br>
        <TextField label={"Nome"} placeholder={"Digite o seu nome"} />
        <TextField label={"Cargo"} placeholder={"Digite o seu cargo"} />
        <TextField label={"Imagem"} placeholder={"Arraste aqui a imagem"} />
      </form>
    </section>
  );
};
