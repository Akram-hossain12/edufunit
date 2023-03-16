import React from 'react';
import { Link } from 'react-router-dom';
import { AcademicCapIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const user = {name:'akram'}
    return (
        <div>
            <div className="navbar text-zinc-100 bg-cyan-800">
                <div className="flex-1 ">
                    <AcademicCapIcon className='w-10 h-9'></AcademicCapIcon><Link className='btn btn-ghost normal-case'> <span className='text-3xl'>EduFunIT</span></Link>
                </div>

                <div className='navbar-item list-none mx-5 text-xl'>

                    <li className='mx-3 p-3 rounded-md hover:bg-cyan-700 hover:border-r-2  transition duration-150 ease-out hover:ease-in'><Link to='/'>Home</Link></li>

                    <li className='mx-3 p-3 rounded-md hover:bg-cyan-700 hover:border-r-2  transition duration-150 ease-out hover:ease-in'><Link to='/about'>Course</Link></li>

                    <li className=' mx-3 p-3 rounded-md hover:bg-cyan-700 hover:border-r-2  transition duration-150 ease-out hover:ease-in'><Link to='/about'>About</Link></li>

                    <li className='mx-3 p-3 rounded-md hover:bg-cyan-700 hover:border-r-2  transition duration-150 ease-out hover:ease-in'><Link to='/blog'>Blog</Link></li>

                </div>
                {
                    user?.uid?
                        <div className="flex-none">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">8</span>
                                    </div>
                                </label>
                                <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                    <div className="card-body">
                                        <span className="font-bold text-lg">8 Items</span>
                                        <span className="text-info">Subtotal: $999</span>
                                        <div className="card-actions">
                                            <button className="btn btn-primary btn-block">View cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown dropdown-end mx-5">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                        :
                        <div className='text-xl list-none'>
                            <li className=' mx-3 p-3 rounded-md hover:bg-cyan-700 hover:border-r-2  transition duration-150 ease-out hover:ease-in'><Link to='/register'>Sgin-up</Link></li>

                            <li className='mx-3 p-3 rounded-md hover:bg-cyan-700 hover:border-r-2  transition duration-150 ease-out hover:ease-in'><Link to='/login'>Login</Link></li>
                        </div>
                }
            </div>
        </div>
    );
};

export default Header;