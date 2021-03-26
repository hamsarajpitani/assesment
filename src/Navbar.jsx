/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
const Navbar = () => {




  return (
    
    <nav class="navbar sticky-top navbar-expand-lg  navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Sperentes
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
