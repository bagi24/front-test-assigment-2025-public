import React from "react";
import styles from "../styles/TimelineChart.module.css";

type ChartPoint = {
  x: string | number;
  y: number;
};

type Props = {
  data: ChartPoint[];
  width?: number;
  height?: number;
};

const TimelineChart: React.FC<Props> = ({
  data,
  width = 600,
  height = 240,
}) => {
  if (!data.length) return <div>No data</div>;

  const maxY = Math.max(...data.map((d) => d.y));

  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - (d.y / maxY) * height;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className={styles.wrapper}>
      <svg width={width} height={height}>
        <polyline
          fill="none"
          stroke="#007bff"
          strokeWidth="2"
          points={points}
        />
      </svg>
    </div>
  );
};

export default TimelineChart;
