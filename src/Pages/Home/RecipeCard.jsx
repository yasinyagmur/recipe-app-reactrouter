import React from "react";

const RecipeCard = ({ recipe }) => {
  const { label, image } = recipe;
  return (
    <article>
      <h3>{label}</h3>
      <div className="imageDiv">
        <img src={image} alt={label} />
      </div>
      <button>Details</button>
    </article>
  );
};

export default RecipeCard;
