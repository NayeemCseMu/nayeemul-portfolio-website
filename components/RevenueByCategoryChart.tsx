"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

// Approximate figures read off the Power BI dashboard in the
// Customer Behaviour Analytics project (see the case study for the source).
const data = [
  { category: "Clothing", revenue: 0.1 },
  { category: "Accessories", revenue: 0.07 },
  { category: "Footwear", revenue: 0.04 },
  { category: "Outerwear", revenue: 0.02 },
];

export default function RevenueByCategoryChart() {
  return (
    <div>
      <div className="h-56 sm:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
            <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="category"
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
              tickFormatter={(v) => `$${v}M`}
            />
            <Tooltip
              formatter={(value) => [`~$${value}M`, "Revenue"]}
              contentStyle={{
                background: "var(--surface-2)",
                border: "1px solid var(--border-strong)",
                borderRadius: 8,
                fontSize: 12,
                color: "var(--foreground)",
              }}
              labelStyle={{ color: "var(--muted)" }}
              cursor={{ fill: "var(--surface-2)" }}
            />
            <Bar dataKey="revenue" radius={[4, 4, 0, 0]}>
              {data.map((d) => (
                <Cell
                  key={d.category}
                  fill={d.category === "Clothing" ? "var(--accent)" : "var(--border-strong)"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-3 text-xs text-muted-2 font-mono">
        Approximate revenue by category, read from the Power BI dashboard.
      </p>
    </div>
  );
}
