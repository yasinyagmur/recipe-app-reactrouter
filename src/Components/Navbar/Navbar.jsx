import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="http://github.com/yasinyagmur" target="blank">
            Link For Recipe Project Github <FaGithub size={20} />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/home">Recipe</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
