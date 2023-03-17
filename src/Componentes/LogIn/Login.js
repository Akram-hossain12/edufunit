import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";



const Login = () => {
    return (

        <div className=''>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-6">
                            Try to ,Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
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

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;