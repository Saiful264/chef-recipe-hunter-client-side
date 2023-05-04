import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleChef = () => {
  const recipe = useLoaderData();

  return (
    <div className="lg:px-32 p-6">
      <div className="lg:flex bg-base-100 shadow-xl lg:mx-28 lg:my-12 rounded-lg">
        <div className="lg:w-4/5 lg:px-4 ">
          <p className="text-6xl font-bold pb-6">{recipe.name}</p>
          <p className="text-2xl font-semibold text-gray-600 pb-3">
            {recipe.description}
          </p>
          <p className="text-2xl font-semibold text-gray-600 pb-3">
            <span className="text-gray-800">Num Of Recipes:</span> {recipe.num_of_recipes}
          </p>
          <p className="text-2xl font-semibold text-gray-600 pb-3">
          <span className="text-gray-800">Years Of Experience:</span> {recipe.years_of_experience}
          </p>
          <p className="text-2xl font-semibold text-gray-600 pb-3">
          <span className="text-gray-800">Likes: </span> {recipe.likes}
          </p>
        </div>
        <figure>
          <img className="w-fit rounded-lg" src={recipe.picture} alt="Movie" />
        </figure>
      </div>

      <div>{recipe.recipes.map((recipe) => 
      <div className="lg:flex bg-base-100 shadow-xl lg:mx-28 lg:my-12 rounded-lg">
      <div className="lg:w-4/5 lg:px-4 ">
        <p className="text-6xl font-bold pb-6">{recipe.name}</p>
        <p className="text-2xl font-semibold text-gray-600 pb-3">
        Cooking Method {recipe.cooking_method}
        </p>
        <p className="text-2xl font-semibold text-gray-600 pb-3">
        <span className="text-gray-800">rating: </span> {recipe.rating}
        </p>
        <p className="text-2xl font-semibold text-gray-600 pb-3">
          <span className="text-gray-800">Ingredient:</span> {recipe.ingredients.map(ingredient => <p>{ingredient}</p>)}
        </p>
      </div>
      <figure>
        <img className="w-fit rounded-lg" src={recipe.img} alt="Movie" />
      </figure>
    </div>
      )}</div>
    </div>
  );
};

export default SingleChef;
