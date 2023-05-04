import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ data }) => {
  const { _id, picture, name, num_of_recipes, years_of_experience, likes } = data;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="rounded-lg" src={picture} alt="Shoes" />
        </figure>
        <div className="card-body grid grid-flow-col text-center">
          <div className="text-left">
            <h1 className="text-lg font-bold">Name: {name}</h1>
            <h1 className="text-lg font-bold">Experience: {years_of_experience}</h1>
          </div>
          <div>
            <p className="text-lg font-bold">Likes: {likes}</p>
            <h1 className="text-lg font-bold">Recipes :{num_of_recipes}</h1>
          </div>
        </div>
          <div className="pb-4 text-center">
          <Link to={`singleChef/${_id}`} className="btn btn-success w-4/5">Success</Link>
          </div>
      </div>
    </div>
  );
};

export default Cart;
