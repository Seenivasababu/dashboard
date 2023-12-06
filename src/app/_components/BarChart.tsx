"use client";

import {
  ResponsiveContainer,
  BarChart as Chart,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

const BarChart = ({ data }: { data: any }) => {
  return (
    <div className="mt-10">
      <ResponsiveContainer width="100%" height={300}>
        <Chart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Bar
            dataKey="value"
            barSize={60}
            style={{ fill: "var(--accent-9)" }}
          />
        </Chart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
