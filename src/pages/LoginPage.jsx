import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const LoginPage = () => {
    const {loginUser ,setUser}=useContext(AuthContext)

const location=useLocation()
const navigate= useNavigate()
    const handleLogin=(e)=>{
        e.preventDefault();
        const form= new FormData(e.target);
        const email=form.get('email')
        const password=form.get('password')
        loginUser(email ,password)
        .then(result=>{
            const user=result.user
            // console.log(user)
            setUser(user)
            navigate(location?.state? location.state:"/")
        })
        .catch(err=>{
            // console.log(err.code)
        })


    }
    return (
        <div className='min-h-screen flex justify-center items-center '>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                <h2 className='text-2xl font-bold text-center my-10'>Login your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] text-white rounded-none">Login</button>
                    </div>
                </form>
                <p className='font-semibold text-center mb-7'>Don’t Have An Account ? <Link to={'/auth/register'} className='text-red-500 font-semibold'>Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;