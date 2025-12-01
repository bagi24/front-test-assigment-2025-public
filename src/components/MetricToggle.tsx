import React from "react";
import styles from "../styles/MetricToggle.module.css";

type Metric = "clicks" | "revenue" | "impressions";

type Props = {
  metric: Metric;
  onChange: (metric: Metric) => void;
};

const MetricToggle: React.FC<Props> = ({ metric, onChange }) => {
  return (
    <div className={styles.container}>
      {["clicks", "revenue", "impressions"].map((m) => (
        <button
          key={m}
          className={`${styles.btn} ${metric === m ? styles.active : ""}`}
          onClick={() => onChange(m as Metric)}
        >
          {m.charAt(0).toUpperCase() + m.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default MetricToggle;
