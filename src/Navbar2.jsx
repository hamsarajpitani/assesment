/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


const Navbar2 = () => {
  return (
        <div  id="nav" className="nav d-flex justify-content-between align-items-center ">
    
        <div className="nav__brand position-relative">
        <svg className="position-absolute top-0 left-0" 
        style={{"z-index" : '-1'}} 
        viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"> <path fill="#8A3FFC" d="M60.6,-15.2C68.2,3.7,57,33.3,36.5,47.6C16,61.9,-13.8,60.9,-33.3,46.6C-52.9,32.2,-62.2,4.5,-55,-14C-47.7,-32.4,-23.9,-41.5,1.3,-41.9C26.5,-42.4,53,-34.1,60.6,-15.2Z" transform="translate(100 100)" /> </svg>
        Hello.</div>
        <div id="nav__hide" className="nav__options d-flex align-items-center justify-content-center">
            <ul className='d-flex justify-content-center align-items-center  list-unstyled'>
            <li>
                <a href="" className="active">about</a>
            </li>
            <li>  
                <a href="">Protfolio</a>
            </li>
            <li>
                <a href="">Skills</a>
            </li>
            </ul>
        </div>
        <div id="nav__hide" className="nav__contact d-flex align-items-center">
            <a href="" className="nav__contact__btn">contact</a>
        </div>
        </div>
    
  
  );
};

export default Navbar2;
