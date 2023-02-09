import { ResponsiveContainer, LineChart, AreaChart, Line, XAxis, YAxis, CartesianGrid, 
          Legend, Tooltip, Area, BarChart, Bar, PieChart, Pie } from 'recharts';


import pdata from '../data1';
  

const HeroSection = ()=>{
    return (
        <div className="hero-section">
            <div className="chart 1">
              <h1 className="chart-Heading">Student Vs Course-Fee</h1>
              <ResponsiveContainer width="90%" aspect={2}>
                <AreaChart data={pdata} width={100} height={300} margin={{top: 5, right: 30, left:20, bottom: 5 }}>
                  <CartesianGrid />
                  <XAxis dataKey="name" interval={'preserveStartEnd'} />
                  <YAxis/>
                  <Tooltip contentStyle={{background: 'white'}}/>
                  <Area dataKey="currentStudent" stroke="#8884d8"   fill="#8884d8" activeDot={{r:8}}/>
                  <Area dataKey="fees" stroke="#82ca9d" fill="#82ca9d" activeDot={{r:8}}/>
            
                </AreaChart>
              </ResponsiveContainer> 
            </div>
            <div className="chart 2">
            <h1 className="chart-Heading">Target vs Current Student</h1>
              <ResponsiveContainer width="90%" aspect={2}>
                <BarChart data={pdata} width={500} height={300} margin={{top: 5, right: 30, left:20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <XAxis dataKey="name" interval={'preserveStartEnd'}/>
                  <YAxis/>
                  <Bar dataKey="currentStudent" stroke="#8884d8" fill="#8884d8"/>
                  <Bar dataKey="targetStudent" stroke="#82ca9d" fill="#82ca9d"/>
            
                </BarChart>
              </ResponsiveContainer> 
            </div>
          
            <div className="chart 3">
            <h1 className="chart-Heading">Target vs Current Batchs</h1>
              <ResponsiveContainer width="90%" aspect={2}>
              <PieChart width={730} height={250}>
                <Pie data={pdata} dataKey="CurrentCountBatchs" cx="50%" cy="50%" outerRadius={30} fill="#8884d8" />
                <Pie data={pdata} dataKey="targetCountBatchs" cx="50%" cy="50%" innerRadius={40} outerRadius={60} fill="#82ca9d" label />
              </PieChart>
              </ResponsiveContainer> 
            </div>
            <div className="chart 4">
            <h1 className="chart-Heading">Fee per Course</h1>
              <ResponsiveContainer width="90%" aspect={2}>
                <LineChart data={pdata} width={500} height={300} margin={{top: 5, right: 30, left:20, bottom: 5 }}>
                  <XAxis dataKey="name" interval={'preserveStartEnd'} />
                  <YAxis/>
                  <Tooltip/>
                  <Legend/>
                  <Line type="linear" dataKey="fees" stroke='green' strokeWidth={2}  activeDot={{r:8}}/>
            
                </LineChart>
              </ResponsiveContainer> 
            </div>
          
        </div>

    );
}

export default HeroSection;