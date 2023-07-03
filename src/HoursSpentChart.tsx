import "./index.css";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "under 10", value: 400 },
  { name: "10-50", value: 300 },
  { name: "50-100", value: 300 },
  { name: "100-500", value: 200 },
  { name: "500-1000", value: 278 },
  { name: "over 1000", value: 189 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${data[index].name+ ": " +(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function App() {
  return (
    <PieChart width={600} height={600}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={200}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
