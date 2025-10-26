import Lottie from 'lottie-react';
import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../../assets/icons/user.json"
import "./Navbar.css"
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const {user, SignOutUser} = use(AuthContext)
    // console.log(user);
 
    const handleSignOut = () =>{
        SignOutUser()
        .then(() =>{
            alert("LogOut Successfully..")
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    // photoURL
    return (
        <div className='flex justify-between items-center'>
            <div>
                {user && user.email}
            </div>


        <div className=""></div>
        <nav className="nav flex font-bold text-accent gap-5 md:ms-40">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/carrier">Carrier</NavLink>
        </nav>
        <div className="login-btn flex items-center gap-4 ">
            {
                user ? <img className='w-15 rounded-full' src={user?.photoURL}/> :
               <Lottie animationData={userIcon} loop={true} className='w-[45px] border-2 rounded-4xl'/> 
            }
            
        
        {
            user ? 
            <button onClick={handleSignOut} className='btn btn-primary px-10 cursor-pointer'>LogOut</button>
            : 
            <Link to="/auth/login" className='btn btn-primary px-10 cursor-pointer'>Login</Link>

        }
        </div>
          
        </div>
    );
};

export default Navbar;