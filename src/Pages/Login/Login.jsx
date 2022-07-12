import React from "react";
import meal from "../../assets/meal.svg";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState({ username: "", password: "" }); 
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("loginUser", JSON.stringify(login));
    setLogin({ username: "", password: "" });
    navigate("home");
  };
  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <img src={meal} alt="meal" width={350} />
      </div>
      <div className="formControl">
        <input
          className="formInput"
          type="text"
          id="username"
          placeholder="Enter Your Username"
          required
          value={login.username}
          onChange={handleChange}
        />
        <label htmlFor="username">Username</label>
        <input
          className="formInput"
          type="password"
          id="password"
          placeholder="Enter Your Password"
          required
          value={login.password}
          onChange={handleChange}
        />
        <label htmlFor="password">Username</label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
