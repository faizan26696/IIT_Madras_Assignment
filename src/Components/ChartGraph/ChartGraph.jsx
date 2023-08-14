import React from "react";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from "recharts";

const ChartGraph = () => {
  const data = [
    { percent: "23%", temp: 23 },
    { percent: "29%", temp: 29 },
    { percent: "58%", temp: 58 },
    { percent: "75%", temp: 75 },
    { percent: "33%", temp: 33 },
    { percent: "20%", temp: 20 },
    { percent: "73%", temp: 73 },
    { percent: "49%", temp: 49 },
  ];

  return (
    <AreaChart width={812} height={90} data={data}>
      <Area dataKey="temp" fill="blue" stroke="white" />
      <CartesianGrid strokeOpacity={0} />
      <XAxis dataKey="percent" fontSize="14px" tick={false} padding="2rem" />
      <YAxis axisLine={false} tick={false} />
    </AreaChart>
  );
};

export default ChartGraph;


export default ChartGraph;
