import React from "react";
import styles from "../styles/DataTable.module.css";
import { AggregatedSlot } from "../types";

type Props = {
  rows: AggregatedSlot[];
};

const DataTable: React.FC<Props> = ({ rows }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Campaigns</th>
          <th>Impressions</th>
          <th>Clicks</th>
          <th>Revenue</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            <td>{r.date}</td>
            <td>{r.campaignsActive}</td>
            <td>{r.impressions}</td>
            <td>{r.clicks}</td>
            <td>${r.revenue.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
