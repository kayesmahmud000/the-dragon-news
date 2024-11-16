import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import userImg from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user, logOutUser}=useContext(AuthContext);

    const link = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>


    </>
    return (
        <div>
            <div className="navbar  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                link
                            }
                        </ul>
                    </div>
                    <div className='text-xl font-bold'>{user&& user?.displayName}</div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {link}
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-3">
                   <div>
                   {
                        user && user.email?<img className=' w-10 rounded-full' src={user.photoURL} alt="" /> :<img className='rounded-full' src={userImg} alt="" />
                    }
                    </div> 
                   {
                    user&& user?.email ? <button onClick={logOutUser} className="btn bg-gray-700 py-1 px-7 text-white"> Log Out</button> : <NavLink to="/auth/login" className="btn bg-gray-700 py-1 px-7 text-white">Login</NavLink>
                   }
                </div>
            </div>
        </div>
    );
};

export default Navbar;