import React from 'react'
import "./HomePage.css"
import Slideshow from "../slideShow/Slideshow"
import Slider from "../slider/Slidpic"
import Shop2 from '../shop/Shop2'
import Footer from "../footer/Footer"

function HomePage() {
    return ( 
        <>
        <div className="mainContainer">
            <div className="innerBlock">
                <Slideshow />
                {/* <Slider /> */}

                {/* <div className="logologo">
         <img  src="/pictures/logo1.png"/>
       </div> */}
                <div className="BottomSqares">
                    
                    <div className="leftSqare">
                    <img  src="/pictures/logoNobg.png"/>
                    </div>



                    <div className="rightSqare">
<h1><u>Welcome to Rachel Table Cloth</u></h1>
<h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.of type and scrambled it to make </h6>

                    </div>
                </div>
            </div>

  {/* <Shop2 /> */}
 
        </div>
         {/* <Footer /> */}
      </>
    )           
}

export default HomePage
