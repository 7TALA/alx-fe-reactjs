import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipe = Data.find((recipe) => recipe.id === Number(id));
    setRecipe(recipe);
  }, [id]);

  if (!recipe) {
    return <div> Recipe not found</div>;
  }

  return (
    <>
      <div className="m-8 flex flex-col gap-4 p-8 bg-blue-100 shadow hover:shadow-lg transition-shadow duration-200 rounded-lg lg:w-[400px]">
        <img src={recipe.image} width="auto" height="auto" />
        <h2 className="text-blue-950 text-3xl md:text-4xl capitalize font-medium ">
          {recipe.title}
        </h2>
        <p className="text-blue-950 text-lg md:text-2xl">{recipe.summary}</p>
        <p className="text-blue-950 text-[1.15rem] md:text-[1.5rem]">
          <span className="font-medium">Ingredients:</span> {recipe.ingredients}
        </p>
        <p className="text-blue-950 text-[1.15rem] md:text-[1.5rem]">
          <span className="font-medium">Preparation Steps:</span>{" "}
          {recipe.instructions}
        </p>
      </div>
    </>
  );
};

export default RecipeDetail;