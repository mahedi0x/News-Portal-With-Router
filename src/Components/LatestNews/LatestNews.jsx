import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center justify-center shadow bg-base-200 p-2 gap-5 my-7'>
            <p className='bg-secondary px-3 p-3 text-white rounded w-[150px]'>Latest News</p>
            {/* <p className='text-base font-bold text-base'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p> */}
            

        <Marquee className='text-base font-semibold  gap-5'
        gradient={false} // disable fading gradient, optional
        speed={60}       // speed of scrolling
        pauseOnHover={true} // pause when hovering
      >
       <p >Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
       <p >Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
       <p >Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
      </Marquee>
        </div>
    );
};

export default LatestNews;