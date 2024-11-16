import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold  text-xl'>Find Us On</h2>
            <div>
                <div className="join flex join-vertical my-5 *:bg-none ">
                    <button className="btn join-item justify-start border border-gray-300"><FaFacebook></FaFacebook> Facebook</button>
                    <button className="btn join-item justify-start border border-gray-300"> <FaInstagram/> Instagram</button>
                    <button className="btn join-item justify-start border border-gray-300"><FaTwitter></FaTwitter> Twitter</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;