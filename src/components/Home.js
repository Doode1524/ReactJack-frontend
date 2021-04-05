import React from 'react';
import {Link} from 'react-router-dom'
const Home = (props) => {
const handleClick = () => {
   // we'll do handle the logout functionality here
  }
return (
   
    <div>
      <Link to='/login'>Log In</Link>
      <br></br>
      <Link to='/signup'>Sign Up</Link>
      <br></br>
      { 
        props.loggedInStatus ? 
        <Link to='/logout' onClick={handleClick}>Log Out</Link> : 
        null
      }
    </div>
  );
};
export default Home;