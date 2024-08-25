import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  const handleDelete = () => {
    deleteRecipe(recipeId); // Delete the recipe
    setSearchTerm(""); // Reset the search term
    navigate("/"); // Redirect to the home page or another appropriate page
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;