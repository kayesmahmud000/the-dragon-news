import React from 'react';

const Loader = () => {
    return (
        <div className=' flex min-h-screen justify-center items-center '>
            <div>
                <span className="loading loading-dots loading-xs"></span>
                <span className="loading loading-dots loading-sm"></span>
                <span className="loading loading-dots loading-md"></span>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        </div>
    );
};

export default Loader;