import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = (props) => {
 
  return (
    <div>
      <Link to="/login">Log In</Link>
      <br></br>
      <Link to="/signup">Sign Up</Link>
      <br></br>
      {props.loggedInStatus ? (
        <Link to="/logout" onClick={props.handleClick}>
          Log Out
        </Link>
      ) : null}
    </div>
  );
};
export default Home;
