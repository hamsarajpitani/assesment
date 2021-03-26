/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import { IconButton, TextField } from "@material-ui/core";
import { auth, storage } from "../firebase";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

import CheckIcon from "@material-ui/icons/Check";
const ProfileScreen = () => {
  const [profile, setProfile] = useState("");
  const [Password, setPassword] = useState("");
  const [success, setSuccess] = useState(null);
  const user = useSelector(selectUser);
  const Currentuser = auth.currentUser;

  console.log(Currentuser);

  // Retrieve the object from storage
  const UserData = localStorage.getItem("UserObject");

  const { firstname, lastname, dob, phonenumber, email, password } = JSON.parse(
    UserData
  );

  const handleimage = (e) => {
    const img = e.target.files[0];

    console.log("IMG", img);

    const uploadTask = storage.ref(`images/${img.name}`).put(img);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(img.name)
          .getDownloadURL()
          .then((url) => {
            setProfile(url);
            localStorage.setItem("profileURL", JSON.stringify(url));
          });
      }
    );
  };
  const profileURL = localStorage.getItem("profileURL");

  // console.log(profileURL);
  const handleEdit = () => {
    const fileinput = document.getElementById("imageinput");
    fileinput.click();
  };

  const handlepassword = (e) => {
    setPassword(e.target.value);
  };
  
  const changepassword = () => {
    Currentuser.updatePassword(Password)
      .then(() => {
          setSuccess("success");
        setTimeout(() => {
           setSuccess(null); 
           setPassword('');
        }, 2000);    
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div class="profile-page">
      <div class="page-header header-filter" data-parallax="true"></div>
      <div class="main main-raised">
        <div class="profile-content ">
          <div class="container ">
            <div class="row ">
              <div class="col ml-auto mr-auto">
                <div class="profile">
                  <div class="avatar">
                    <img
                      src={
                        !profile
                          ? `https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png`
                          : profile
                      }
                      alt="Circle Image"
                      class="img-raised rounded-circle img-fluid profileimage"
                    />

                    <input
                      type="file"
                      name=""
                      id="imageinput"
                      hidden="hidden"
                      onChange={handleimage}
                    />
                    <IconButton className="btn editicon" onClick={handleEdit}>
                      <EditRoundedIcon />
                    </IconButton>
                  </div>
                  <div class="name">
                    <h3 class="title"> {`${firstname} ${lastname}`}</h3>
                    <a
                      href="#pablo"
                      class="btn btn-just-icon btn-link btn-twitter"
                    >
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a
                      href="#pablo"
                      class="btn btn-just-icon btn-link btn-dribbble"
                    >
                      <i class="fa fa-dribbble"></i>
                    </a>
                    <a
                      href="#pablo"
                      class="btn btn-just-icon btn-link btn-twitter"
                    >
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a
                      href="#pablo"
                      class="btn btn-just-icon btn-link btn-pinterest"
                    >
                      <i class="fa fa-pinterest"></i>
                    </a>
                    <h5 className="mt-4 fs-6 fw-bolder">Change password</h5>
                    {success && (
                      <div class="alert alert-success" role="alert">
                        Change Success
                      </div> 
                    )}
                    <TextField
                      name="confirmPassword"
                      type="password"
                      label="confirm password"
                      value={Password}
                      onChange={handlepassword}
                    />
                    <Button
                      onClick={changepassword}
                      className="float-start mx-auto"
                      variant="contained"
                      color="primary"
                    >
                      <CheckIcon />
                    </Button>
                  </div>
                </div>
              </div>
              <div class="description col-md-9 mx-auto  text-capitalize fw-bol">
                <h1 className="mb-0 fs-6 fw-bolder">username</h1> <br />
                <p className="float-start">{firstname}</p>
                <p className="">{lastname}</p>
                <h1 className="mb-0 fs-6 fw-bolder">Email address</h1> <br />
                <p className="email ">{user.uemail}</p>
                <h1 className="mb-0 fs-6 fw-bolder">date of birth</h1> <br />
                <p className="">{dob}</p>
                <h1 className="mb-0 fs-6 fw-bolder">phone number</h1> <br />
                <p className="">{phonenumber}</p>
                <Button
                  onClick={() => auth.signOut()}
                  variant="contained"
                  color="secondary"
                  className="w-100"
                >
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
