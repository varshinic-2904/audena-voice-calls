import { useEffect, useState } from "react";
import { getCalls } from "./api";
import CallForm from "./components/callForm";
import CallList from "./components/callList";

function App() {
  const [calls, setCalls] = useState([]);

  const loadCalls = async () => {
    const data = await getCalls();
    setCalls(data);
  };

  useEffect(() => {
    loadCalls();
    const interval = setInterval(loadCalls, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>AI Voice Call Dashboard</h2>
      <CallForm onCreated={loadCalls} />
      <CallList calls={calls} />
    </div>
  );
}

export default App;
