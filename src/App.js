import './App.css';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';

const pdata = [
  {
    name: 'Python',
    student: 13,
    fees: 10
  },
  {
    name: 'Javascript',
    student: 15,
    fees: 12
  },
  {
    name: 'PHP',
    student: 5,
    fees: 10
  },
  {
    name: 'Java',
    student: 10,
    fees: 5
  },
  {
    name: 'C#',
    student: 9,
    fees: 4
  },
  {
    name: 'C++',
    student: 10,
    fees: 8
  },
];

function App() {
  return (
    <>
    <h1 className="chart-Heading">Course Data</h1>
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart data={pdata} width={500} height={300} margin={{top: 5, right: 300, left:20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name" interval={'preserveStartEnd'}
        tickFormatter={(value)=>value+" Programming"} />
        <YAxis/>
        <Tooltip contentStyle={{background: 'yellow'}}/>
        <Legend/>
        {/* to curve line of line chart use monotone */}
        <Line type="monotone" dataKey="student" stroke='red' activeDot={{r:8}}/>
        <Line type="monotone" dataKey="fees" stroke='green' activeDot={{r:8}}/>
        {/* activeDot only works wiht Tooltip */}
        
      </LineChart>
    </ResponsiveContainer>
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart data={pdata} width={500} height={300} margin={{top: 50, right: 300, left:20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name" interval={'preserveStartEnd'}
        tickFormatter={(value)=>value+" Programming"} />
        <YAxis/>
        <Tooltip contentStyle={{background: 'yellow'}}/>
        <Legend/>
        {/* to curve line of line chart use monotone */}
        <Line type="monotone" dataKey="student" stroke='red' activeDot={{r:8}}/>
        <Line type="monotone" dataKey="fees" stroke='green' activeDot={{r:8}}/>
        {/* activeDot only works wiht Tooltip */}
        
      </LineChart>
    </ResponsiveContainer>
    </>
  );
}

export default App;
