import React from 'react'
import "./HomePage.css"
import Slideshow from "../slideShow/Slideshow"
import Slider from "../slider/Slidpic"

function HomePage() {
    return (
        <div className="mainContainer">
            <div className="innerBlock">
            <Slideshow />
            {/* <Slider /> */}
           
                 {/* <div className="logologo">
         <img  src="/pictures/logo1.png"/>
       </div> */}
  
            </div>

    
        </div>
    )
}

export default HomePage
