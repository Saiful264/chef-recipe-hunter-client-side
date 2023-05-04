import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleChef = () => {
  const chefInfo = useLoaderData();

  return (
    <div className="lg:px-32 p-6">
      <div className="lg:flex bg-base-100 shadow-xl lg:mx-28 lg:my-12">
        <div className="lg:w-4/5 lg:px-4 ">
          <p className="text-6xl font-bold pb-6">{chefInfo.name}</p>
          <p className="text-2xl font-semibold text-gray-600 pb-3">
            {chefInfo.description}
          </p>
          <p className="text-2xl font-semibold text-gray-600 pb-3">
            <span className="text-gray-800">Num Of Recipes:</span> {chefInfo.num_of_recipes}
          </p>
          <p className="text-2xl font-semibold text-gray-600 pb-3">
          <span className="text-gray-800">Years Of Experience:</span> {chefInfo.years_of_experience}
          </p>
          <p className="text-2xl font-semibold text-gray-600 pb-3">
          <span className="text-gray-800">Likes: </span> {chefInfo.likes}
          </p>
        </div>
        <figure>
          <img className="w-fit rounded-lg" src={chefInfo.picture} alt="Movie" />
        </figure>
      </div>

      <div>{chefInfo.recipes.map((recipe) => console.log(recipe))}</div>
    </div>
  );
};

export default SingleChef;
