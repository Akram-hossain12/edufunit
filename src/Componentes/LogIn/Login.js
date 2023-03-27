import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AuthContext } from '../../Context/AuthContext/AuthProvider';



const Login = () => {
    const [error,setError]=useState('');
    const location = useLocation();
    const navigate =useNavigate()
    const from =location.state?.from?.pathname|| '/';
    const {
         signInEmailPass,
         providerLogin, 
         providerGithub,
         setLoader 
        } = useContext(AuthContext);


    const googleProvider = new GoogleAuthProvider();
    const GitHubProvider = new GithubAuthProvider();


    const signInCliker = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInEmailPass(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setError("")
                if(user.emailVerified){    
                    navigate(from,{replace:true})
                    }
                    else{
                     toast.error('')
                    }
            
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
          
    }
    const GoogleUserCliker = (auth, provider) => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                setError(error.message);
                console.error(error)
            })
    }
    const GitHubCliker=()=>{
        providerGithub(GitHubProvider)
        .then(result=>{
            const user =result.user;
            console.log(user)
        })
        .catch(error=>{
            console.log(error)
            setError(error.message);
        
        })
        .finally(()=>{
            setLoader(false)
        })
    }
    return (

        <div className='mt-10'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-6">
                            Try to ,Login now!</h1>

                    </div>
                    <form onSubmit={signInCliker} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>

                            <div className='text-red-600'>
                                <p>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-cyan-800">Login</button>
                            </div>

                        </div>

                    </form>
                    <div className='text-center'>
                        <h1>Another Way to Login?</h1>
                        <div className='d-block'>
                            <button onClick={GoogleUserCliker} className=" ml-12 mt-5 btn btn-xs sm:btn-sm md:btn-md "> <FaGoogle className='mr-5 text-xl'></FaGoogle> LogIn with Google</button>

                            <button onClick={GitHubCliker} className=" ml-12 my-6 btn btn-xs sm:btn-sm md:btn-md "> <FaGithub className='mr-5 text-xl'></FaGithub>  Login with GitHub</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;