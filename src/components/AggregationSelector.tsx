import React from "react";
import styles from "../styles/AggregationSelector.module.css";
import { AggregationMode } from "../types";

type Props = {
  value: AggregationMode;
  onChange: (value: AggregationMode) => void;
};

const AggregationSelector: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Aggregation:</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as AggregationMode)}
        className={styles.select}
      >
        <option value="hourly">Hourly</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
    </div>
  );
};

export default AggregationSelector;
