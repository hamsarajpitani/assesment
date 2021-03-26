/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
const Navbar = () => {




  return (
    
    <nav class="navbar sticky-top navbar-expand-lg  navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="data:image/png;base64,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" alt=""/>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <NavLink 
              exact
              activeClassName="active_menu"
              className="nav-link"
               href="#" to="/">
              Home
            </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_menu"
                  className="nav-link"
to="/todos"
                >
                  Todos
                </NavLink>
              </li>
              <li className="nav-item">
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
