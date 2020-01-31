import React, { useState } from "react";
import axios from 'axios';

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [ user, setUser ] = useState({});


  const handleChange = e => {
    setUser ({
      ...user,
      [e.target.name] : e.target.value
    })
  }
  console.log(user)
  const handleSignIn = e => {
    e.preventDefault();
    axios
    .post(`http://localhost:5000/api/login`, user)
    .then(res => {
      localStorage.setItem('token',res.data.payload)
      props.history.push('/bubble-page')
    })
    .catch(err => console.log(err))
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <label>Username:<input type="text" onChange={handleChange} name="username" placeholder="Username" /></label>
      <label>Password:<input type="text" onChange={handleChange} name="password" placeholder="Password" /></label>
      <button onClick={handleSignIn}>Submit</button>
    </>
  );
};

export default Login;
