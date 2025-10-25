import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { SiGithub } from 'react-icons/si';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold'>Social Login</h2>

            <div className="space-y-3 mt-3">
                <button className='btn btn-outline btn-secondary w-full my-2'><FcGoogle size={20}/> Login With Google</button>
                <button className='btn btn-outline btn-primary w-full my-2'><SiGithub size={20}/> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;