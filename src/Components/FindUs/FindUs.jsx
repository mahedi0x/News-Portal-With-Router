import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='my-5'>
            <h2 className='font-bold'>Find Us</h2>
            <div className="join join-vertical w-full">
                <button className='btn bg-base-100 justify-start  join-item'><FaFacebook /> Facebook</button>
                <button className='btn bg-base-100 justify-start  join-item'><FaTwitter /> Twitter</button>
                <button className='btn bg-base-100 justify-start  join-item'><FaInstagramSquare />
                Instagram</button>

            </div>
        </div>
    );
};

export default FindUs;