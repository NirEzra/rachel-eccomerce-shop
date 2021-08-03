import React from "react";
import "./ProductCategory.css";

export default function ProductCategory() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="column">
          <div className="card">
            <div className="card-bg"></div>

            <div className="pic">
              <img src="/pictures/cups.jpg" alt=""></img>

              <div className="description">
                <h3>Nir Ezra</h3>
                <h4>FrontEnd Developer</h4>
                <h4>
                  <i className="fa fa-map-marker" aria-hidden="true"></i> Israel
                </h4>
                <ul>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-facebook-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-github" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
