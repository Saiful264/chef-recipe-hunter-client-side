import React from 'react';
import banner from '../../assets/banner/Cooking.gif'

const Banner = () => {
    return (
        <div className='flex items-center justify-between px-16'>
             <div>
             <h1 className='text-6xl text-slate-900 font-bold uppercase pb-5'>Well come to chef's recipe</h1>
             <p className='text-xl font-medium pr-3 pl-3'>In the culinary world, a chef is a highly skilled and trained professional cook who is responsible for preparing food in a restaurant, hotel, or other food service establishment.</p>
             <div className='pt-6'>
             <button className='font-bold btn-primary uppercase'>Explor recipes</button>
             </div>
             </div>
            <img className='w-2/5' src={banner} alt="" srcset="" />
        </div>

        
    );
};

export default Banner;