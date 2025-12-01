import { Metric, AggregatedSlot, AggregationMode } from "../types";

// Helper to group data by day/week/month
export function aggregateMetrics(
  metrics: Metric[],
  mode: AggregationMode
): AggregatedSlot[] {
  const slotsMap: Record<string, AggregatedSlot> = {};

  metrics.forEach((m) => {
    const dateObj = new Date(m.timestamp);
    let key: string;

    switch (mode) {
      case "hourly":
        key = m.timestamp.slice(0, 13); // YYYY-MM-DDTHH
        break;
      case "daily":
        key = m.timestamp.slice(0, 10); // YYYY-MM-DD
        break;
      case "weekly":
        const firstDayOfWeek = new Date(dateObj);
        firstDayOfWeek.setDate(dateObj.getDate() - dateObj.getDay()); // Sunday
        key = firstDayOfWeek.toISOString().slice(0, 10);
        break;
      case "monthly":
        key = m.timestamp.slice(0, 7); // YYYY-MM
        break;
      default:
        key = m.timestamp.slice(0, 10);
    }

    if (!slotsMap[key]) {
      slotsMap[key] = {
        date: key,
        impressions: 0,
        clicks: 0,
        revenue: 0,
        campaignsActive: 0,
      };
    }

    slotsMap[key].impressions += m.impressions;
    slotsMap[key].clicks += m.clicks;
    slotsMap[key].revenue += m.revenue;
    slotsMap[key].campaignsActive += 1;
  });

  return Object.values(slotsMap).sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}
