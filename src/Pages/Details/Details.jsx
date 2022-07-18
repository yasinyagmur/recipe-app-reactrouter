import React from "react";
import { useLocation } from "react-router-dom";
import dietSvg from "../../assets/diet.svg";
import './Details.css'

const Details = () => {
  const { state } = useLocation();

  return (
    <div className="mainContainer">
      <div className="headerContainer">
        <h1>{state.label}</h1>
        <img className="detailImg" src={dietSvg} alt="" />
      </div>
      
        <div>
          <h4>NUTRIENTS</h4>
          <p>
            {state.totalNutrients.CA.label} :{" "}
            {Math.round(state.totalNutrients.CA.quantity)}
            {state.totalNutrients.CA.unit}
          </p>
          <p>
            {state.totalNutrients.CHOCDF.label} :{" "}
            {Math.round(state.totalNutrients.CHOCDF.quantity)}
            {state.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {state.totalNutrients.CHOLE.label} :{" "}
            {Math.round(state.totalNutrients.CHOLE.quantity)}
            {state.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {state.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
            {state.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{state.totalWeight}</p>
          <p>Calories: {Math.round(state.calories)}</p>
          {state.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
        </div>
        <div>
          <img className="detailImg" src={state.image} alt="" />
        </div>
        <div>
          {state.ingredientLines.map((line, index) => (
            <div key={index}>
              <p>
                {index + 1}-{line}
              </p>
              <br />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Details;
