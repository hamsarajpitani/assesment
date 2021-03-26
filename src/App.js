/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./screens/Login";
import { auth } from "./firebase";
import ProfileScreen from "./screens/ProfileScreen";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Todos from "./Todos";
import Gallary from "./screens/gallary/Gallary";
import Navbar from './Navbar';


function App() {
  // let user = null;
  let user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            uemail: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    // //! goodto return
    // return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
        <Navbar/>
       
          <Switch>
            <Route exact path="/profile">
              <ProfileScreen/>
            </Route>
            <Route exact path="/">
              <HomeScreen/>
            </Route>
            <Route exact path="/todos">
              <Todos/>
            </Route>
            <Route exact path="/gallary">
              <Gallary/>
            </Route>
          </Switch>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
