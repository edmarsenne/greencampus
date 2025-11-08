import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Carregando...");

  useEffect(() => {
    fetch("http://localhost:3001/api/status")
      .then((res) => res.json())
      .then((data) => setStatus(data.message));
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>🌱 GreenCampus</h1>
      <p>{status}</p>
    </div>
  );
}

export default App;

