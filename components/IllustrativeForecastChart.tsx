"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// Synthetic, illustrative data only — not derived from any dataset.
// Purpose: preview the shape of the forecast-vs-actual chart the finished
// dashboard will render once the analysis is complete.
const sample = [
  { period: "M1", actual: 42, forecast: 40 },
  { period: "M2", actual: 47, forecast: 45 },
  { period: "M3", actual: 44, forecast: 46 },
  { period: "M4", actual: 53, forecast: 50 },
  { period: "M5", actual: 58, forecast: 55 },
  { period: "M6", actual: 55, forecast: 57 },
  { period: "M7", actual: null, forecast: 61 },
  { period: "M8", actual: null, forecast: 64 },
];

export default function IllustrativeForecastChart() {
  return (
    <div>
      <div className="h-56 sm:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sample} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
            <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="period"
              stroke="var(--muted-2)"
              tick={{ fill: "var(--muted)", fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: "var(--border)" }}
            />
            <YAxis
              stroke="var(--muted-2)"
              tick={{ fill: "var(--muted)", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                background: "var(--surface-2)",
                border: "1px solid var(--border-strong)",
                borderRadius: 8,
                fontSize: 12,
                color: "var(--foreground)",
              }}
              labelStyle={{ color: "var(--muted)" }}
            />
            <Line
              type="monotone"
              dataKey="actual"
              stroke="var(--foreground)"
              strokeWidth={2}
              dot={false}
              connectNulls={false}
              name="Actual"
            />
            <Line
              type="monotone"
              dataKey="forecast"
              stroke="var(--accent)"
              strokeWidth={2}
              strokeDasharray="5 4"
              dot={false}
              name="Forecast"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-3 text-xs text-muted-2 font-mono">
        Illustrative preview with synthetic data — final chart will use validated
        forecast output once modeling is complete.
      </p>
    </div>
  );
}
