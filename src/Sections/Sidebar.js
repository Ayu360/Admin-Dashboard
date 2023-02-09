import React from 'react'
import HomeLine from '../image/HomeLine.png';
import LineChartLine from '../image/LineChartLine.png';
import InformationLine from '../image/InformationLine.png';
import { Link } from "react-router-dom";
import Img from "../image/Img.jpg";

const sidebar = ()=> {
  return (
    <div className="sidebar">
        <div className="sidebar-info">
          <div className="image-wrapper-sidebar">
              <img src={Img} alt="img" style={{borderRadius: "50%", 
              width:"90px", height: "90px"}}/>
          </div>
          <div className="sidebar-content">
              <b style={{color: "white"}}>Ayush Singh</b>
          </div>
        </div>
        <div className="links">
        <li> <Link to="/"><img src={HomeLine} alt="logo" /> Dashboard</Link></li>
        <li> <Link to="/Analytics"><img src={LineChartLine} alt="logo" />Analytics</Link></li>
        <li> <Link to="/AboutUs"><img src={InformationLine} alt="logo" /> About dev</Link></li>
        </div>
    </div>
  )
}
export default sidebar;