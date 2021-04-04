import React from "react";

// import Navbar from "../Navbar";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <div className="container mt-5 text-capitalize">
        <div className="row">
          <div className="col-10 mx-auto  homescreen__body">
            <div className="row  ">
              <div className="col ">
                <h4 className="mt-5">About Project</h4>
                <ol className="">
                  <li>Used Firebase Storage For Gallary </li>
                  <li>Used Redux as State Management Tool </li>
                  <li>Authentication Done using firebase AUTH</li>
                  <li>used Local Storage fors toreing user details</li>
                  <li>used Formics & Yup for signup validation</li>
                </ol>
              </div>
            </div>
            <hr />
            <div className="row text-center ">
              <div className="col mx-auto homescreen__img ">
                <h4 className="mt-5">Carrer Goal</h4>
                <img
                  className="image-fluid mt-2"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png"
                  alt=""
                />
              </div>
            </div>
            <hr />
            <div className="row text-center  ">
              <div className="col mx-auto mb-5">
                <h4 className="">github link</h4>
                <a href="https://github.com/hamsarajpitani/assesment">
                  <i class="mt-4 fs-1 fab fa-github-alt "></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
