 import React from 'react';
 import loading from "../../assets/icons/loading-color.json"
import Lottie from 'lottie-react';
 
 const Loading = () => {
    return (
         <>
         <Lottie animationData={loading} loop={true} className='w-20'/>
         </>
    );
 };
 
 export default Loading;