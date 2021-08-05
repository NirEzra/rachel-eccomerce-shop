import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./Slideshow.css"
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import transitions from '@material-ui/core/styles/transitions'

function Slideshow() {

    // const [shad,setShad]=useState("styles");

const caruselStyle={
    // display:"flex" ,
    // alignItems: "center",
    // justifyContent: "center",
    // posiiton:"absolut"
 
}

const caruselItemStyle={
    width:"100%",
    height:"100%",
    display:"flex" ,
    alignItems: "center",
    justifyContent: "center",
 
  
}

const innerStyle ={
    width:"fit-content",
    height:"fit-content",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-evenly",
    alignItems:"center",
    textAlign:"center",
    // paddingBottom:"1.25rem",
    // backgroundColor:"rgba(0, 0, 0, 0.475)",
    animation: "opacityh1 ease-in 2s",
  borderRadius:"20px",
  margin:"auto",
  top:"0",
  bottom:"0",
  left:"0",
  right:"0",
  
 
}

    const buttonStyle = {
        width: "150px",
        fontSize: "20px",
        color: "black",
        background: "#e1c9b4",
        fontFamily: "site-font",
        border: "none",
        boxShadow: "none",
        boxShadow: "inset 0 0 10px #00000033",
        // '&:hover': {
        //     boxShadow: "inset 0 0 10px #00000033",
        // },
    };




    return (
        <>
            <Carousel >
                <Carousel.Item style={caruselItemStyle}>
                
                    <img
                        className="picpic"
                        src="/pictures/cover.jpg"
                        alt="First slide"

                    />
                    {/* <div className="divdiv"> */}
                    <Carousel.Caption className="innerinner" style={innerStyle}>
                    <h1 className="rtcText">Rachel Table Cloth</h1>
                    
                        <Link to="/shop" >
                            <Button className="primary"
                                style={buttonStyle} >Enter Shop</Button>
                        </Link>
                    </Carousel.Caption>
                    {/* </div> */}
                </Carousel.Item>

             
            </Carousel>

   
        </>
    )
}

export default Slideshow
