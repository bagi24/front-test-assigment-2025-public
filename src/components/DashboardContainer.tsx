import React, { useMemo, useState } from "react";
import styles from "../styles/DashboardContainer.module.css";
import { Metric, AggregatedSlot, AggregationMode } from "../types";
import AggregationSelector from "./AggregationSelector";
import MetricToggle from "./MetricToggle";
import TimelineChart from "./TimelineChart";
import DataTable from "./DataTable";
import { aggregateMetrics } from "../utils/dataAggregator";

type ChartMetric = "clicks" | "impressions" | "revenue";

interface Props {
  rawData: Metric[];
}

const DashboardContainer: React.FC<Props> = ({ rawData }) => {
  const [aggregationMode, setAggregationMode] =
    useState<AggregationMode>("daily");
  const [metric, setMetric] = useState<ChartMetric>("clicks");

  const aggregatedData = useMemo(
    () => aggregateMetrics(rawData, aggregationMode),
    [rawData, aggregationMode]
  );

  const metricData = useMemo(
    () =>
      aggregatedData.map((slot) => ({
        x: slot.date,
        y: slot[metric as keyof AggregatedSlot] as number,
      })),
    [aggregatedData, metric]
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Campaign Analytics Dashboard</h2>
      <AggregationSelector
        value={aggregationMode}
        onChange={setAggregationMode}
      />
      <MetricToggle metric={metric} onChange={setMetric} />
      <TimelineChart data={metricData} />
      <DataTable rows={aggregatedData} />
    </div>
  );
};

export default DashboardContainer;
