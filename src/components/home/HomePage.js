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
<h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h6>

                    </div>
                </div>
            </div>

  {/* <Shop2 /> */}
 
        </div>
         <Footer />
      </>
    )           
}

export default HomePage
