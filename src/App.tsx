import { FC, useEffect, useState } from "react";
import Container from "./components/Container";
import HomePage from "./pages/HomePage/HomePage";
import { getModeData } from "./services/api";
import { Modes } from "./types";

const App: FC = () => {
  const [modes, setModes] = useState<Modes>([]);
  const [error, setError] = useState();

  const fetchModesHandler = () => {
    getModeData()
      .then((data) => {
        setModes(data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    fetchModesHandler();
  }, []);

  if (error) {
    return <p>Error Loading Data! </p>
  }

  return (
    <Container>
      <HomePage modes={modes} />
    </Container>
  );
};

export default App;
