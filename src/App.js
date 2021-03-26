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
import Navbar from "./Navbar";
import Todolist from "./Todos.jsx";

function App() {
  // let user = null;
  let user = useSelector(selectUser);

  const DATA = [
    {
      id: 1,
      title: "Loard Of The Rings",
      category: "Movies",
      date: "",
      isDone: false,
    },
    {
      id: 2,
      title: "God Father I",
      category: "Movies",
      date: "",
      isDone: false,
    },
    {
      id: 3,
      title: "Seven Angry Man",
      category: "Movies",
      date: "",
      isDone: false,
    },
    {
      id: 4,
      title: "Pulp Fiction",
      category: "Movies",
      date: "",
      isDone: true,
    },
    {
      id: 5,
      title: "The Brothers Karamazov",
      category: "Books",
      date: "",
      isDone: true,
    },
    {
      id: 6,
      title: "The Master and Margarita",
      category: "Books",
      date: "",
      isDone: false,
    },
    { id: 7, title: "Don Quixote", category: "Books", date: "", isDone: false },
  ];

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
            <Navbar />

            <Switch>
              <Route exact path="/profile">
                <ProfileScreen />
              </Route>
              <Route exact path="/">
                <HomeScreen />
              </Route>
              <Route exact path="/todos">
                <Todolist tasks={DATA} />
              </Route>
              <Route exact path="/gallary">
                <Gallary />
              </Route>
            </Switch>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
