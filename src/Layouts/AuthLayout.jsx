import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-[#F3F3F3] '>
            <header className='container mx-auto p-5'>
                <Navbar></Navbar>
            </header>
            <main className='container mx-auto my-10'>
            <Outlet></Outlet>
            </main>
            
        </div>
    );
};

export default AuthLayout;