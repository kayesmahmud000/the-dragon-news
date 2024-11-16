import React from 'react';
import LoginWith from './LoginWith';
import FindUs from './FindUs';

const RightSide = () => {
    return (
        <div className=' space-y-7'>
            <LoginWith></LoginWith>
            <FindUs></FindUs>
        </div>
    );
};

export default RightSide;