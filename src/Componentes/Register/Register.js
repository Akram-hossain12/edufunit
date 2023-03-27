import React, { useContext, useState } from 'react';
import {  Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const Register = () => {
    const {EamilAndPasswordReg,userVrifying,updeteUserProfile}= useContext(AuthContext);
    const [error,setError]=useState('')
    const createUserCliker =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email =form.email.value;
        const password = form.password.value;
        const name =form.userName.value;
        const photo = form.photoUrl.value;
        console.log(email,password,name,photo);
        EamilAndPasswordReg(email,password)
        .then(result=>{
            const user =result.user;
            form.reset();
            clikerUpdeteProfile(name,photo);
            clikerOfVarifing();
            console.log(user)
        })
        .catch(error=>{
            console.error(error)
            setError( error.message)
        })
    }
    const clikerOfVarifing =()=>{
        userVrifying()
       .then(()=>{})
   }
   const clikerUpdeteProfile =(name,photo)=>{
    const profile ={displayName:name, photoURL:photo};
     updeteUserProfile(profile)
    .then(()=>{})
    .catch(error=>{console.error(error)})

}
   
    return (
        <div className='mt-10'>
            <form onSubmit={createUserCliker} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left mb-10">
                        <h1 className="text-5xl font-bold">Please,Register now!</h1>
                       
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">FullName</span>
                                </label>
                                <input name='userName' type="text" placeholder="fullName" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input name='photoUrl' type="text" placeholder="photoUrl" className="input input-bordered" />
                            </div>


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
                            <p className='text-rose-700'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn bg-cyan-800">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;