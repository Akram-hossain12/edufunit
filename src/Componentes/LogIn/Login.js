import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';



const Login = () => {
    const {signInEmailPass}= useContext(AuthContext);
    const signInCliker = (e)=>{
           e.preventDefault();
            const form = e.target;
            const email=form.email.value;
            const password = form.password.value;
            console.log(email,password)
            signInEmailPass(email,password)
            .then(result=>{
                const user =result.user;
                form.reset()
                console.log(user)})
                .catch(error=>{
                    console.error(error)
                })
    }
    return (

        <div className=''>
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
                            <div className="form-control mt-6">
                                <button className="btn bg-cyan-800">Login</button>
                            </div>

                            <div>
                                <h1>Another Way to Login?</h1>
                                <div className='d-block'>
                                    <button className=" ml-12 mt-5 btn btn-xs sm:btn-sm md:btn-md "> <FaGoogle className='mr-5 text-xl'></FaGoogle> LogIn with Google</button>

                                    <button className=" ml-12 my-6 btn btn-xs sm:btn-sm md:btn-md "> <FaGithub className='mr-5 text-xl'></FaGithub>  Login with GitHub</button>
                                </div>

                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;