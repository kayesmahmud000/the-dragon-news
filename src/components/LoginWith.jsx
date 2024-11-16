
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGit, FaGithub } from "react-icons/fa6";
import { AuthContext } from "../Provider/AuthProvider";
const LoginWith = () => {
    const {loginWithGoogle, setUser}=useContext(AuthContext)

    const handleGoogleLogin=()=>{
        loginWithGoogle()
        .then(result=>{
            const user=result.user
            setUser(user)
        })
        .catch(err=>{
            // console.log(err.message)
        })
    }
    return (
        <div>
           <h2 className='font-bold  text-xl'>Login With</h2> 
           <div className="flex flex-col my-4 gap-3">
            <button onClick={handleGoogleLogin} className="btn border border-black hover:border-blue-500 hover:text-blue-500"> <FaGoogle /> Loin With Google</button>
            <button className="btn border border-black hover:border-blue-500 hover:text-blue-500"> <FaGithub></FaGithub> Login With GitHub</button>
           </div>
        </div>
    );
};

export default LoginWith;