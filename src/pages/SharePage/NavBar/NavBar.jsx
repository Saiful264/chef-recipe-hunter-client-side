import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <div className='flex justify-between px-9'>
                <Link className='uppercase font-bold'>Chef's Recipe</Link>
                <ul className='flex'>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>LogIn</li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;