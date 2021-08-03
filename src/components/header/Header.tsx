import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";
import { Layout, Menu, Modal } from "antd";

function Header() {
  // const[nir,setNir]=useState(0)
  const { currentUser } = useAuth();
  console.log(currentUser && currentUser.email);

  return (
    <div className="MainHeader">
      <div className="headerUl">
      <div className="logologo1">
         <img  src="/pictures/logo1.png"/>
       </div>
        {/* <i className="fa fa-bars" aria-hidden="true"></i> */}
     

        {/* <Link to="/" style={{ textDecoration: "none" }} className="diver">
            Home
          </Link> */}

        <Link to="/about" className="diver">
          About
        </Link>

        <Link to="/shop" className="diver">
          Shop
        </Link>

        <Link to="/gallery" className="diver">
          Gallery
        </Link>

        <Link to="/contact" className="diver">
          Connect us
        </Link>

        <div className="fafabar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-cart4"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
        </div>

        <div className="fafabar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        <span style={{ color: "#fff" }}>
          {currentUser && currentUser.email}{" "}
        </span>
      </div>
    </div>
  );
}

export default Header;