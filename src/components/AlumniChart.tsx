"use client";

import Image from "next/image";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    freshgrad: 4000,
    experiencedgrad: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    freshgrad: 3000,
    experiencedgrad: 1398,
    amt: 2210,
  },
  {
    name: "March",
    freshgrad: 2000,
    experiencedgrad: 9800,
    amt: 2290,
  },
  {
    name: "April",
    freshgrad: 2780,
    experiencedgrad: 3908,
    amt: 2000,
  },
  {
    name: "May",
    freshgrad: 1890,
    experiencedgrad: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    freshgrad: 2390,
    experiencedgrad: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    freshgrad: 3490,
    experiencedgrad: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    freshgrad: 3490,
    experiencedgrad: 4300,
    amt: 2100,
  },
  {
    name: "Sep",
    freshgrad: 3490,
    experiencedgrad: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    freshgrad: 3490,
    experiencedgrad: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    freshgrad: 3490,
    experiencedgrad: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    freshgrad: 3490,
    experiencedgrad: 4300,
    amt: 2100,
  },
];

const AlumniChart = () => {
  return (
    <div className="bg-white rounded-2xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Alumni</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />{" "}
          <Line
            type="monotone"
            dataKey="freshgrad"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line type="monotone" dataKey="experiencedgrad" stroke="#CFCEFF" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AlumniChart;
