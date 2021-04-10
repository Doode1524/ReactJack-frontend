import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../cards.css";

const Home = (props) => {
  return (
    <div className="cards-div">
      <Link to="/login" className="button">
        Log In
      </Link>
      <h1>ReactJack!</h1>
      <Link to="/signup" className="button">
        Sign Up
      </Link>
    </div>
  );
};
export default Home;

{
  /* {props.loggedInStatus ? (
  <Link to="/logout" className="button" onClick={props.handleClick}>
    Log Out
  </Link>
) : null} */
}
