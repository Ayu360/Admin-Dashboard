import React from 'react'
import '../Styles/Dashboard.css';
import data from '../data1';

//Bar Chart
import { ResponsiveContainer, XAxis, Line, ComposedChart, Legend, Tooltip, YAxis, BarChart, Bar} from 'recharts';


const MaxStudentSub= ()=>{
  let max_students=0;
  let subject="";
      data.forEach((item)=>{
          if(item.currentStudent > max_students){
              max_students=item.currentStudent;
              subject=item.name;
          }
      });
      return subject;
};

const MimimumStudentSub= ()=>{
  let min_students=1000000000;
  let subject="";
      data.forEach((item)=>{
          if(item.currentStudent < min_students){
              min_students=item.currentStudent;
              subject=item.name;
          }
      });
      return subject;
};
const dateToday = ()=>{
  let date= new Date();
  return date;

}
function Dashboard() {
  return (
    <div className='Dashboard'>
        <div className="topbar">
            <div className="welcome-message">
              Greetings Ayush👋
            </div>
        </div>

        <div className="center-bar">
          <div className="cards">
            Most Students
            <p><h3>{MaxStudentSub()}</h3></p>
          </div>
          <div className="cards">
            Least Students
            <p><h3>{MimimumStudentSub()}</h3></p>
          </div>
          <div className="cards">
            Batch Size
            <p><h3>20</h3></p>
          </div>
          <div className="cards">
            Target Date 
            <p><h3>
              {(dateToday()).getDate()}
              /{(dateToday()).getMonth()}
              /{(dateToday()).getFullYear()}
            </h3></p>
          </div>
        </div>

        <div className='Bottom-bar'>
            <h1 className="chart-Heading">Student Vs Course-Fee</h1>
            <div className="bar-chart">
            <ResponsiveContainer width="100%" aspect={3}>
                <ComposedChart data={data} width={500} height={500} margin={{top: 5, right: 30, left:20, bottom: 5 }}>
                  <XAxis dataKey="name" interval={'preserveStartEnd'}/>
                  <YAxis/>
                  <Tooltip/>
                  <Legend/>
                  <Bar dataKey="currentStudent" stroke="#8884d8" fill="#8884d8"/>
                  <Bar dataKey="targetStudent" stroke="#82ca9d" fill="#82ca9d"/>
                  <Line type="linear" dataKey="intermediateTarget" stroke="#C46200" strokeWidth={2}/>
                   
                </ComposedChart>
              </ResponsiveContainer> 
            </div>
        </div>
    </div>
  )
}

export default Dashboard;
