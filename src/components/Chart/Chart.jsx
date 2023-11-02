import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'Asignnment 1',
        MyMarks: 50,
        totalMarks: 60,
      },
      {
        name: 'Asignnment 2',
        MyMarks: 25,
        totalMarks: 30,
      },
      {
        name: 'Asignnment 3',
        MyMarks: 20,
        totalMarks: 40,
      },
      {
        name: 'Asignnment 4',
        MyMarks: 6,
        totalMarks: 30,
      },
      {
        name: 'Asignnment 5',
        MyMarks: 15,
        totalMarks: 30,
      },
      {
        name: 'Asignnment 6',
        MyMarks: 22,
        totalMarks: 30,
      },
      {
        name: 'Asignnment 7',
        MyMarks: 25,
        totalMarks: 30,
      },
      {
        name: 'Asignnment 8',
        MyMarks: 25,
        totalMarks: 30,
      },
      {
        name: 'Asignnment 9',
        MyMarks: 25,
        totalMarks: 30,
      }
  ];

const Chart = () => {
    return (
        <div className='container mx-auto'>
        <BarChart
          width={1200}
          height={600}
          data={data}
          margin={{
            top: 25,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="MyMarks" stackId="a" fill="#8884d8" />
          <Bar dataKey="MyMarks" stackId="a" fill="#82ca9d" />
          <Bar dataKey="MyMarks" fill="#ffc658" />
        </BarChart>
        </div>
    );
};

export default Chart;