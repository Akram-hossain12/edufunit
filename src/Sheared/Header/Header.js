import React from 'react';
import { Link } from 'react-router-dom';
import { AcademicCapIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const user = {name:'akram',uid:''}
    return (
        <div class="header-item">
            <div className="navbar text-zinc-100 bg-cyan-800">
                <div className="flex-1 ">
                    <AcademicCapIcon className='w-10 h-9'></AcademicCapIcon><Link className='btn btn-ghost normal-case' to='/'> <span className='text-3xl'>EduFunIT</span></Link>
                </div>

                <div className='navbar-item list-none mx-5 text-xl'>

                    <li className='mx-3 p-3 rounded-md hover:bg-cyan-700 hover:border-r-2  transition duration-150 ease-out hover:ease-in'><Link to='/'>Home</Link></li>

                    <li className=' p-3 rounded-md hover:bg-cyan-700 hover:border-r-2  transition duration-150 ease-out hover:ease-in'><Link to='/about'>Course</Link></li>

                    <li className=' mx-3 p-3 rounded-md hover:bg-cyan-700 hover:border-r-2  transition duration-150 ease-out hover:ease-in'><Link to='/about'>About</Link></li>

                    <li className=' p-3 rounded-md hover:bg-cyan-700 hover:border-r-2  transition duration-150 ease-out hover:ease-in'><Link to='/blog'>Blog</Link></li>

                </div>
                {
                    user?.uid?
                        <div className="flex-none">
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
                        <div className='sm:text-sm lg:text-xl list-none'>
                            <li className=' mx-3 p-3 rounded-md hover:bg-cyan-700 hover:border-r-2  transition duration-150 ease-out hover:ease-in'><Link to='/register'>Sgin-up</Link></li>

                            <li className='mx-3 p-3 rounded-md hover:bg-cyan-700 hover:border-r-2  transition duration-150 ease-out hover:ease-in'><Link to='/login'>Login</Link></li>
                        </div>
                }
            </div>
        </div>
    );
};

export default Header;