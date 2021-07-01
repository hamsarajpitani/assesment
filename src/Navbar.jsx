/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

import { NavLink, useHistory } from "react-router-dom";
const Navbar = () => {
  const history = useHistory();

  const handleprofile = ()=>{
    history.push('/profile')  
  }
  return (
   
    <nav class="navbar sticky-top navbar-expand-lg  navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-built_knockout.png"
            alt=""
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink
                exact
                activeClassName="active_menu"
                className="nav-link"
                href="#"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                exact
                activeClassName="active_menu"
                className="nav-link"
                to="/gallary"
              >
                Gallary
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active_menu"
                className="nav-link"
                to="/profile"
                onClick={()=>handleprofile}
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

