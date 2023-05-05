import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaHeart , FaStar, FaRegStar} from "react-icons/fa";
import Rating from "react-rating";

const SingleChef = () => {
  const recipe = useLoaderData();

  return (
    <div className="lg:px-32 p-6">
      <div className="lg:flex bg-base-100  lg:my-12 rounded-lg">
        <div className="lg:w-4/5 lg:px-4 ">
          <p className="text-6xl font-bold pb-6">{recipe.name}</p>
          <p className="text-2xl font-semibold text-gray-600 pb-3">
            {recipe.description}
          </p>
          <p className="text-2xl font-semibold text-gray-600 pb-3">
            <span className="text-gray-800">Num Of Recipes:</span>{" "}
            {recipe.num_of_recipes}
          </p>
          <p className="text-2xl font-semibold text-gray-600 pb-3">
            <span className="text-gray-800">Years Of Experience:</span>{" "}
            {recipe.years_of_experience}
          </p>
          <p className="text-2xl font-semibold text-gray-600 pb-3">
            <span className="flex items-center gap-4">
              <FaHeart /> {recipe.likes}
            </span>
          </p>
        </div>
        <figure>
          <img className="w-fit rounded-lg" src={recipe.picture} alt="Movie" />
        </figure>
      </div>

      <div>
        <h1 className="text-4xl font-bold">Recipe of {recipe.name}:</h1>

        <div className="grid grid-flow-row gap-9">
          {recipe.recipes.map((recipe) => (
            <div className="lg:flex bg-base-100 shadow-xl lg:pl-10 lg:pt-8 rounded-lg">
              <div className="lg:w-4/5 lg:px-4 ">
                <p className="text-4xl font-bold pb-6">{recipe.name}</p>
                <p className="text-lg font-medium text-gray-800 pb-3">
                  <span className="text-2xl font-bold">Cooking Method :</span>{" "}
                  <br /> {recipe.cooking_method}
                </p>
                <p className="text-xl font-semibold text-gray-800 pb-3">
                  <Rating
                    placeholderRating={recipe.rating}
                    readonly
                    emptySymbol={
                      <FaRegStar/>
                    }
                    placeholderSymbol={
                      <FaStar className="text-orange-400"/>
                    }
                    fullSymbol={
                      <FaStar/>
                    }
                  />
                  <span className="text-gray-900">Rating: </span>

                  {recipe.rating}
                </p>
                <div className="text-2xl font-semibold text-gray-600 pb-3">
                  <span className="text-gray-800 font-bold">Ingredient:</span>{" "}
                  {recipe.ingredients.map((ingredient) => (
                    <p className="px-3 text-lg text-gray-900"> {ingredient}</p>
                  ))}
                </div>
              </div>
              <figure>
                <img
                  className="w-fit rounded-lg"
                  src={recipe.img}
                  alt="Movie"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
