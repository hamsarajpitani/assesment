/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SignInScreen from "./SignInScreen";
import SignUpscreen from "./SignUpscreen";

const Login = () => {

   const [Signin,setSignIn] = useState(false);

  return (
    <div className="login">
      <div className="login__background d-flex justify-content-between">
    
        <div className="login__gradrient" />
      </div>

      <div className="login__body">
          {   
           
              <SignInScreen/> 
           
             
          }
      
      </div>
    </div>
  );
};

export default Login;
