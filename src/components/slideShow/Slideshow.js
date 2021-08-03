import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./Slideshow.css"
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import transitions from '@material-ui/core/styles/transitions'

function Slideshow() {

    // const [shad,setShad]=useState("styles");

const caruselStyle={

  
}

const caruselItemStyle={
    width:"100vw",
    height:"100%",
    display:"flex" ,
    alignItems: "center",
    justifyContent: "center",
  
}

const innerStyle ={
    width:"450px",
    height:"250px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-evenly",
    alignItems:"center",
    paddingBottom:"1.25rem",
    backgroundColor:"rgba(255, 255, 255, 0.575)",
    animation: "opacityh1 ease-in 2s",
    
}

    const buttonStyle = {
        width: "150px",
        fontSize: "20px",
        color: "black",
        background: "#fff6ff",
        fontFamily: "site-font",
        border: "none",
        boxShadow: "none",
        // boxShadow: "inset 0 0 10px #00000033",
        // '&:hover': {
        //     boxShadow: "inset 0 0 10px #00000033",
        // },
    };




    return (
        <>
            <Carousel style={caruselStyle}>
                <Carousel.Item style={caruselItemStyle}>
                
                    <img
                        className="picpic"
                        src="/pictures/img1.jpg"
                        alt="First slide"

                    />
                    <Carousel.Caption className="innerinner" style={innerStyle}>
                    <h1 className="rtcText">Rachel Table Cloth</h1>
                        <Link to="/shop" >
                            <Button className="primary"
                                style={buttonStyle} >Enter Shop</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>

             
            </Carousel>

   
        </>
    )
}

export default Slideshow
