import React from "react";
import { useNavigate } from "react-router-dom";
import './RecipeCards.css'

const RecipeCard = ({ recipes }) => {
  // console.log(recipes);
  const navigate = useNavigate();

  return (
    <article >
      {recipes.map(({ recipe }, index) => (
        <div key={index} className="container" >
          <h3>{recipe.label}</h3>
          <img className="imgContainer" src={recipe.image} alt={recipe.label} srcset="" />
          <button className="cardButton" onClick={() => navigate("/details", { state: recipe })}>
            View More
          </button>
        </div>
      ))}
    </article>
  );
};

export default RecipeCard;
