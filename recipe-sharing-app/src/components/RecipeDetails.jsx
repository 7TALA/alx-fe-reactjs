import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";
import FavoriteButton from "./FavoriteButton";

const RecipeDetails = () => {
  const { recipeId } = useParams(); // use useParams to get the recipeId from the URL
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(recipeId))
  );

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <FavoriteButton recipeId={recipe.id} />
      {/* <EditRecipeForm recipe={recipe} /> */}
      <DeleteRecipeButton recipeId={recipe.id} onDelete={() => navigate("/")} />
      <button
        onClick={() => navigate("/")}
        style={{
          display: "block",
          marginTop: "20px",
          backgroundColor: "#2196F3",
          color: "#fff",
          padding: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default RecipeDetails;