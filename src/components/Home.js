import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../cards.css'

const Home = (props) => {
 
  return (
    <div className="cards-div">
      <Link to="/login" className="button">Log In</Link>
      <Link to="/signup" className="button">Sign Up</Link>

      {props.loggedInStatus ? (
        <Link to="/logout" className="button" onClick={props.handleClick}>
          Log Out
        </Link>
      ) : null}
    </div>
  );
};
export default Home;
