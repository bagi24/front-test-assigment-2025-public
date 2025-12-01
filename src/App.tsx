import React, { useEffect, useState } from "react";
import DashboardContainer from "./components/DashboardContainer";
import { Metric } from "./types";

function App() {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setMetrics(data.metrics);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ padding: 24 }}>loading...</div>;

  return <DashboardContainer />;
}

export default App;
