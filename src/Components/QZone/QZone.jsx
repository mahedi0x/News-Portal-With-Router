import React from 'react';
import swimmingImg from "../../assets/swimming.png"
import classImg from "../../assets/class.png"
import playImg from "../../assets/playground.png"

const QZone = () => {
    return (
        <div className='p-3 bg-base-200'>
            <h2 className='font-bold'>QZone</h2>
            <div className="space-y-5">
                <img src={swimmingImg} alt="" className='w-full'/>
                <img src={classImg} alt="" className='w-full'/>
                <img src={playImg} alt="" className='w-full'/>
            </div>
        </div>
    );
};

export default QZone;