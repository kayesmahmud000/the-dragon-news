
import { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const RegisterPage = () => {
    const {createNewUser,userProfileUpdate, setUser}=useContext(AuthContext)
const navigate=useNavigate()
    const handleRegister=(e)=>{
        e.preventDefault()
        const form= new FormData(e.target);
        const name=form.get('name')
        const photo=form.get('photo')
        const email=form.get('email')
        const password=form.get('password')
    //     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    // return regex.test(password);
        // console.log({name,photo,email,password});
        createNewUser(email , password)
        .then(result=>{
            const user=result.user;
            // console.log(user)
            setUser(user);
            userProfileUpdate({displayName:name,photoURL:photo})
            .then(()=>{
                navigate('/')
            })
            .catch(err=>{
                // console.log(err)
            })
        })
        .catch(err=>{
            // console.log(err.message)
        })
    }
    return (
        <div className='min-h-screen flex justify-center items-center '>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                <h2 className='text-2xl font-bold text-center my-10'>Register your account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                    </div>
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
                       
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] text-white rounded-none">Register</button>
                    </div>
                </form>
                <p className='font-semibold text-center mb-7'>Already Have An Account ? <Link to={'/auth/login'} className='text-blue-500 font-semibold'>Login</Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;