import Lottie from 'lottie-react';
import React from 'react';
import { NavLink } from 'react-router';
import user from "../../assets/icons/user.json"
import "./Navbar.css"

const Navbar = () => {
 

    return (
        <div className='flex justify-between items-center'>


        <div className=""></div>
        <nav className="nav flex font-bold text-accent gap-5 md:ms-40">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/carrier">Carrier</NavLink>
        </nav>
        <div className="login-btn flex items-center gap-4 ">
        <Lottie animationData={user} loop={true} className='w-[45px] border-2 rounded-4xl'/> 
        <button className='btn btn-primary px-10'>Login</button>
        </div>
          
        </div>
    );
};

export default Navbar;