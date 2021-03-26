/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useState } from "react";
import { auth } from "../firebase";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { validationSchema } from "../validation/validation";
import Button from '@material-ui/core/Button';


const SignUpscreen = () => {

  const [value, setValue] = useState();

  
  const Userobj = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    dob: "",
    phonenumber: "",
  };

  const signup = () => {
    // e.preventDefault();
    auth
      .createUserWithEmailAndPassword(Userobj.email, Userobj.password)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });

    //   console.log(emailRef.current.value, passwordRef);  
    //   alert("account succesfully Created");
  };

  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });
  
  function onSubmit({ firstName, lastName, dob, email, password }) {
    // display form data on success
    // console.log(data);
    Userobj.email = email;
    Userobj.password = password;
    Userobj.firstname = firstName;
    Userobj.lastname = lastName;
    Userobj.dob = dob;
    Userobj.phonenumber = value;

    // Put the object into storage
    localStorage.setItem('UserObject', JSON.stringify(Userobj));
    signup();
    
  }

  
 
  return (
    <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
      <div className="form-row signup">
        <div className="form-group col-6 float-end  signup__container">
          <label>Last Name</label>
          <input
            name="firstName"
            type="text"
            ref={register}
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.firstName?.message}</div>
        </div>
        <div className="form-group col-6">
          <label>First Name</label>
          <input
            name="lastName"
            type="text"
            ref={register}
            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.lastName?.message}</div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col">
          <label>Date of Birth</label>
          <input
            name="dob"
            type="date"
            ref={register}
            className={`form-control ${errors.dob ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.dob?.message}</div>
        </div>
        <div className="form-group col">
          <label>Email</label>
          <input
            name="email"
            type="text"
            ref={register}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col">
          <label>Password</label>
          <input
            name="password"
            type="password"
            ref={register}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="form-group col">
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            ref={register}
            className={`form-control ${
              errors.confirmPassword ? "is-invalid" : ""
            }`}
          />
          <div className="invalid-feedback">
            {errors.confirmPassword?.message}
          </div>
        </div>
      </div>
      <div className="form-group col">
        <label>Phone number</label>
   
        <PhoneInput
        className="phoneinput"
          placeholder="Enter phone number"
          value={value}
          
          onChange={setValue}
        />
      </div>

      <div className="form-group mt-4">
        <Button 
            type="submit"
            className="signin__btn btn mb-4"
            variant="contained" color="primary">
      Register
      </Button>
      </div>
    </form>
  );
};

export default SignUpscreen;
