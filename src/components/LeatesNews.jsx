import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LeatesNews = () => {
    return (
        <div className='flex gap-2 items-center bg-gray-300 py-4 mb-10 px-3'>
            
                <p className=' bg-[#D72050] py-2 px-3 text-white'>Latest</p>
            
            <Marquee pauseOnHover="true" speed={70}>
                <Link to="/news">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link to="/news">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link to="/news">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link to="/news">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                
            </Marquee>
            
        </div>
    );
};

export default LeatesNews;