import React from 'react';
import pageNotFound from "../../assets/icons/Error 404.json"
import Lottie from 'lottie-react';
import { NavLink } from 'react-router';

const PageNotFound = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Lottie animationData={pageNotFound} loop={true} className='md:w-6/12 mx-auto'></Lottie>
            <NavLink to="/" className="btn text-white bg-secondary flex justify-center w-[300px] mx-auto py-5 text-xl">Go back Home</NavLink>
        </div>
    );
};

export default PageNotFound;