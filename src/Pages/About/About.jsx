import React from "react";
import defaultImage from "../../assets/recipeAbout.png";
import './about.css'
const About = () => {
  return (
    <div className="aboutDiv">
      <img src={defaultImage} alt="" srcset="" />
      <div className="textAbout">
        <h3>I'm Yasin.</h3>
        <p>I'm currently learning Full-Stack Development Languages.</p>
        <p>
          I've already known JS, ReactJS, NodeJS, MongoDB, SQL, Python, Agile
          Methodologies.
        </p>
        <p>
          Send email: <span className="emailText">yasin.yagmur@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default About;
