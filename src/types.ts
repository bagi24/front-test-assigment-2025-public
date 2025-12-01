export interface Campaign {
  id: string;
  name: string;
  platform: string;
}

export interface Metric {
  campaignId: string;
  timestamp: string;
  impressions: number;
  clicks: number;
  revenue: number;
}

export type AggregationMode = "hourly" | "daily" | "weekly" | "monthly";

export interface AggregatedSlot {
  date: string;
  impressions: number;
  clicks: number;
  revenue: number;
  campaignsActive: number;
}
