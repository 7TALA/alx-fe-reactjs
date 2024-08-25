import React, { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );
  const favorites = useRecipeStore((state) => state.favorites);

  useEffect(() => {
    // Generate recommendations whenever favorites change
    generateRecommendations();
  }, [favorites, generateRecommendations]);

  if (recommendations.length === 0) {
    return (
      <div>
        No recommendations available. Mark some recipes as favorites to see
        suggestions!
      </div>
    );
  }

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;