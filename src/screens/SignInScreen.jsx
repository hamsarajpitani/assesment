/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef ,useState} from "react";
import { auth } from "../firebase";
import SignUpscreen from "./SignUpscreen";
import Button from '@material-ui/core/Button';

const SignInScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  
  const [Newuser,setNewuser] = useState(false);

  //!!  SIGNIN  EXISTINg USER
    const signin = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
    
  };

  return (
    <div className="signinscreen  my-auto mx-auto ">
      <div className="signinscreen__card card d-flex justify-content-center" style={{ minWidth: "24rem"  
       }}>
        <h1 className="mb-3 fs-3 text-center">{!Newuser ? `Sign in` : `Create Account`}</h1>
        {
          !Newuser ?
            (
            <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                ref={emailRef}
                type="email"
                className="form-control my-1 mb-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                ref={passwordRef}
                type="password"
                className="form-control my-1 mb-4"
                id="exampleInputPassword1"
                placeholder="Password"
                required
              />
            </div>
          
            <Button 
            type="submit"
            onClick={signin}
            className="signin__btn btn mb-4"
            variant="contained" color="primary">
       Sign In
      </Button>
            <br />

            <p className="">Don't Have Account ?</p>
            <a href="" onClick={(e)=> 
              {
                 e.preventDefault()
                 setNewuser(true) }}>
              Sign Up
            </a>
          </form>
          )
          : (
            <SignUpscreen/>
          )


        }
       
      </div>
    </div>
  );
};

export default SignInScreen;
