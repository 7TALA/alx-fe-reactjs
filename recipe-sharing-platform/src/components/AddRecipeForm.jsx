import React, { useState } from "react";

const AddRecipeForm = () => {
  const [fields, setFields] = useState({
    title: "",
    summary: "",
    ingredients: "",
    instructions: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateFields = {};
    if (!fields.title.trim()) {
      validateFields.title = "Recipe title is required";
    }
    if (!fields.summary.trim()) {
      validateFields.summary = "Recipe summary is required";
    }

    if (!fields.ingredients.trim()) {
      validateFields.ingredients = "Recipe ingredients are required";
    } else {
      const ingredientsArray = fields.ingredients
        .split(",")
        .map((i) => i.trim())
        .filter((i) => i !== "");

      if (ingredientsArray.length < 3) {
        validateFields.ingredients = "Recipe ingredients is below 3 items";
      }
    }

    if (!fields.instructions.trim()) {
      validateFields.instructions = "Preparation steps are required";
    }
    setErrors(validateFields);
    console.log("This errors:", validateFields);
    console.log("Results:", fields);

    if (Object.keys(validateFields).length === 0) {
      alert("Form Sent");
      // const allFieldsNotEmpty = Object.values(fields).every(value => value !== '');
      // if(allFieldsNotEmpty) {
      //   setAllData((prevData) => [
      //     ...prevData,
      //     {id: prevData.length + 1,
      //       title: fields.title,
      //       summary: fields.summary,
      //       ingredients: fields.ingredients,
      //       instructions: fields.instructions,
      //     },
      //   ]);
      // }
    }
  };

  return (
    <>
      <h1 className="pl-8 mt-8 text-green-950">ADD A NEW RECIPE</h1>
      <form
        onSubmit={handleSubmit}
        className="font-medium flex flex-col gap-2 mx-6 mb-16 p-8 w-[400px] md:w-[600] border-solid border-blue-900 rounded shadow-gray-600"
      >
        <label htmlFor="title">Recipe title</label>
        <input
          className="border-solid border-2 border-slate-200 pl-2 leading-7"
          type="text"
          name="title"
          placeholder="Enter recipe name"
          onChange={handleChange}
        />
        {errors.title && (
          <span className="text-red-600 text-xs">{errors.title}</span>
        )}
        <label className="mt-4" htmlFor="summary"></label> Recipe summary
        <input
          className="border-solid border-2 border-slate-200 pl-2 leading-7"
          type="text"
          name="summary"
          placeholder="Enter short description"
          onChange={handleChange}
        />
        {errors.summary && (
          <span className="text-red-600 text-xs">{errors.summary}</span>
        )}
        <label className="mt-4" htmlFor="recipeimage">
          Upload image
        </label>
        <input className="" type="file" name="recipeimage" />
        <label className="mt-4" htmlFor="ingredients">
          Recipe ingredients
        </label>
        <textarea
          className="border-solid border-2 border-slate-200 pl-2 leading-7 "
          name="ingredients"
          cols="40"
          rows="10"
          onChange={handleChange}
        />
        {errors.ingredients && (
          <span className="text-red-600 text-xs">{errors.ingredients}</span>
        )}
        <label className="mt-4" htmlFor="instructions">
          Recipe Instructions
        </label>
        <textarea
          className="border-solid border-2 border-slate-200 pl-2 leading-7"
          name="instructions"
          cols="40"
          rows="10"
          onChange={handleChange}
        />
        {errors.instructions && (
          <span className="text-red-600 text-xs">{errors.instructions}</span>
        )}
        <button className="bg-lime-800 py-2 mt-2 text-white mt-8" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddRecipeForm;