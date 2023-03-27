import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AcademicCapIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user,logOut } = useContext(AuthContext);
    const logOutCliker =()=>{
        logOut()
        .then(()=>{})
        .catch((error=>{console.error(error)}))
    }
    console.log(user)
    return (
        <div className=''>
            <div className="navbar text-zinc-100 lg:w-auto sm:w-[760px] md:w-[1080px]  bg-cyan-800">
                <div className="flex-1 ml-10">
                    <AcademicCapIcon className='w-10 h-9'></AcademicCapIcon><Link className='btn btn-ghost normal-case' to='/'> <span className='lg:text-3xl sm:text-2xl'>EduFunIT</span></Link>
                </div>

                <div className='navbar-item list-none mx-5 text-xl mr-10'>

                    <li className='mx-3 p-3 rounded-md hover:bg-cyan-700 hover:border-r-2  transition duration-150 ease-out hover:ease-in'><Link to='/'>Home</Link></li>

                    <li className=' p-3 rounded-md hover:bg-cyan-700 hover:border-r-2  transition duration-150 ease-out hover:ease-in'><Link to='/courses'>Course</Link></li>

                    <li className=' mx-3 p-3 rounded-md hover:bg-cyan-700 hover:border-r-2  transition duration-150 ease-out hover:ease-in'><Link to='/about'>About</Link></li>

                    <li className=' p-3 rounded-md hover:bg-cyan-700 hover:border-r-2  transition duration-150 ease-out hover:ease-in'><Link to='/blog'>Blog</Link></li>

                </div>
                {
                    user?.uid?
                        <div className="flex-none mr-12">
                            <div className="dropdown dropdown-end mx-5">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user?.photoURL ? <img style={{ height: '40px' }} src={user?.photoURL} alt=""></img> :
                                            <FaUser></FaUser>
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link className="justify-between">
                                            Profile
                                            <span className="badge">{user.displayName}</span>
                                        </Link>
                                    </li>
                                    <li><Link>Settings</Link></li>
                                    <li><Link onClick={logOutCliker}>Logout</Link></li>
                                </ul>
                            </div>
                        </div>
                        :
                        <div className='sm:text-sm lg:text-xl list-none mr-12'>
                            <li className=' mx-3 p-3 rounded-md hover:bg-cyan-700 hover:border-r-2  transition duration-150 ease-out hover:ease-in'><Link to='/register'>Sgin-up</Link></li>

                            <li className='mx-3 p-3 rounded-md hover:bg-cyan-700 hover:border-r-2  transition duration-150 ease-out hover:ease-in'><Link to='/login'>Login</Link></li>
                        </div>
                }
            </div>
        </div>
    );
};

export default Header;