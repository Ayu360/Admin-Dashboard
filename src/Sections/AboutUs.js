import React from 'react'
import '../Styles/Aboutus.css';
import Img from "../image/Img.jpg";

function AboutUs() {
  return (
    <div className='cover'>
        <div className='herosection'>
            <div className="Information-wrapper">
                <ul style={{listStyle: "none"}}>
                    <li>Name: Ayush</li>
                    <li>React Developer</li>
                    <li><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga debitis repellat 
                        repudiandae quidem eligendi eius cumque earum natus magni tempore.</p></li>
                </ul>
            </div>
            <div className="about-image-wrapper">
                <img src={Img} alt="Devloper Img" />
            </div>   
        </div>
        <div className="centerbar">
          <div className="card">
            Email
            <p><h3>singhayush9410@gmail.com</h3></p>
          </div>
          <div className="card">
            Contact Number
            <p><h3>9336715700</h3></p>
          </div>
          <div className="card">
            GitHUB
            <p><h3>Ayu360</h3></p>
          </div>
          <div className="card">
            LinkedIn 
            <p><h3>Ayush Singh
            </h3></p>
          </div>
        </div>
    </div>
        
  )
}

export default AboutUs;
