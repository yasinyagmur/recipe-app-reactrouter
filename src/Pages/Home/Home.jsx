import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Home.css";
import RecipeCard from "./RecipeCard";

const Home = () => {
  const [meal, setMeal] = useState("breakfast");
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = process.env.REACT_APP_APP_ID
  const APP_KEY = process.env.REACT_APP_APP_KEY;
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      setRecipes(data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <>
      <h2>Food App</h2>
      <form className="homeForm" onSubmit={handleSubmit}>
        <div>
          <input
            className="homeInput"
            type="search"
            name="foodSearch"
            id="foodSearch"
            placeholder="Food"
            value={query}
            required
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            className="homeSelect"
            name="mealtype"
            id="meal"
            onChange={(e) => setMeal(e.target.value)}
          >
            <option value="breakfast">Breakfast</option>
            <option value="dinner">Dinner</option>
            <option value="lunch">Lunch</option>
            <option value="snack">Snack</option>
            <option value="teatime">Teatime</option>
          </select>
        </div>
        <button className="homeSubmitButton" type="submit">
          Search
        </button>
      </form>
      <div className="cardList">
        <RecipeCard recipes={recipes} />
      </div>
    </>
  );
};

export default Home;
