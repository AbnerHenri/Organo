import "./App.css";

import { useState } from "react";

import { Banner } from "./components/Banner/Banner";
import { Form } from "./components/Form/Form";

function App() {
  const [collaborators, setCollaborators] = useState([]);

  const addCollaborator = (collaboratorObj, event) => {
    event.preventDefault();

    const newCollaborator = [...collaborators, collaboratorObj];
    setCollaborators(newCollaborator);
  };

  return (
    <>
      <Banner />
      <Form addCollaborator={addCollaborator} />
    </>
  );
}

export default App;
