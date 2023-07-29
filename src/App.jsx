import "./App.css";

import { useState } from "react";

import { Banner } from "./components/Banner/Banner";
import { Form } from "./components/Form/Form";
import { Team } from "./components/Team/Team";

function App() {
  const [collaborators, setCollaborators] = useState([]);
  const teams = [
    {
      name: "Programação",
      primaryColor: "#57c278",
      secondColor: "#d9f7e9",
    },
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondColor: "#E8FF8F",
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secondColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#DB6EBF",
      secondColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secondColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondColor: "#FFEEDF",
    },
  ];

  const addCollaborator = (collaboratorObj, event) => {
    event.preventDefault();

    const newCollaborator = [...collaborators, collaboratorObj];
    setCollaborators(newCollaborator);
  };

  return (
    <>
      <Banner />
      <Form addCollaborator={addCollaborator} />
      {teams.map((element) => {
        return (
          <Team
            name={element.name}
            primaryColor={element.primaryColor}
            secondColor={element.secondColor}
            key={element.name}
          />
        );
      })}
    </>
  );
}

export default App;
