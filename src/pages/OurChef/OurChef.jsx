import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const OurChef = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(`https://chef-recipe-hunter-server-side-saiful264.vercel.app/chef's`)
      .then((res) => res.json())
      .then((datas) => setDatas(datas))
      .catch((error) => console.error(error));
  }, []);

console.log(datas);

  return (
    <div className="py-14 bg-slate-50">
      <div className="text-center py-4">
        <h1 className="text-6xl font-sans font-bold italic pb-2">Our Chef's</h1>
        <p className="text-xl font-semibold">
          Chefs are skilled professionals who bring creativity and expertise to
          the art of cooking.
        </p>
      </div>
      <div className="py-12 ps-6">
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
       {
            datas.map((data) => <Cart key={data._id} data ={data} />)
        }
       </div>
      </div>
    </div>
  );
};

export default OurChef;
