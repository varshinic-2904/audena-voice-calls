import { useEffect, useState } from "react";
import { getCalls } from "./api";
import CallForm from "./components/callForm";
import CallList from "./components/callList";

function App() {
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadCalls = async () => {
    try {
      setError(null);
      const data = await getCalls();
      setCalls(data);
    } catch (err) {
      setError("Failed to load calls");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCalls();
  }, []);

  useEffect(() => {
  const hasPendingCalls = calls.some(
    (call) => call.status === "pending"
  );

  if (!hasPendingCalls) return;

  const timeout = setTimeout(() => {
    loadCalls();
  }, 3000); // poll every 3s ONLY while pending exists

  return () => clearTimeout(timeout);
}, [calls]);


  return (
    <div style={{ padding: 20 }}>
      <h2>AI Voice Call Dashboard</h2>

      <CallForm onCreated={loadCalls} />

      {loading && <p>Loading calls...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && <CallList calls={calls} />}
    </div>
  );
}

export default App;
