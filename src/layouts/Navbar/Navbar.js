import React from "react";
import "./Navbar.css";
import brandLogo from "assets/images/brand-logo.svg";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="container-wrapper">
        <div className="navbar">
          <div className="navbar-left">
            <img src={brandLogo} className="brand-logo" alt="" />
          </div>
          <div className="navbar-right">
            <div className="navbar-links">
              <div className="navbar-link light-blue graphik-regular fs-15px pointer dropdown-icon ">
                Features
              </div>
              <div className="navbar-link light-blue graphik-regular fs-15px pointer dropdown-icon ">
                Resources
              </div>
              <div className="navbar-link light-blue graphik-regular fs-15px pointer ">
                Blog
              </div>
              <div className="navbar-link light-blue graphik-regular fs-15px pointer ">
                Demo
              </div>
              <div className="navbar-link light-blue graphik-regular fs-15px pointer ">
                Pricing
              </div>
            </div>

            <div className="navbar-btns">
              <p className="light-blue graphik-regular fs-15px pointer ">
                Login
              </p>
              <button className="button-wrapper radius-4px bg-sharp-blue white graphik-regular weight-5">
                Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
