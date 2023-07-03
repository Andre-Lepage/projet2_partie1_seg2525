import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: '2023.01',
      active: 4000 
    },

    {
        name: '2023.02',
        active: 1500
      },

      {
        name: '2023.03',
        active: 9000 
      },

      {
        name: '2023.04',
        active: 12000
      },

      {
        name: '2023.05',
        active: 6500
      },

      {
        name: '2023.06',
        active: 8500 
      },

      {
        name: '2023.07',
        active: 3000
      },

    
  ];

  export default function App() {
    return (
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="active" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    );
  }