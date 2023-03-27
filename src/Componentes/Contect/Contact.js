import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='my-6'>
            <div className='w-[800px] h-[450px] my-10 bg-cyan-800 flex justify-center items-center'>
                <div>
                    <h2 className='text-3xl text-fuchsia-400'>Access 2700+</h2>

                    <h5 className='text-5xl font-semibold text-cyan-50'>Contact Us</h5>
                    <Link className='btn btn-secondary btn-outline mt-4' to='/courses'>Viwe all course</Link>
                </div>
            </div>

            <div className="hero w-[900px] min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left ml-10">
                        <h1 className="text-5xl font-bold">Get In touch</h1>
                        <div className='mt-10'>
                            <p className=" my-2 text-3xl"> New York Office</p>
                            <span>Maypole Crescent 70-80 Upper St Norwich NR2 1LT</span>
                        </div>

                        <div className='mt-10'>
                            <p className=" my-2 text-3xl">Email us directly</p>
                            <span>support@educal.com <br></br> support@educal.com</span>
                        </div>

                        <div className='mt-10'>
                            <p className=" my-2 text-3xl">Phone</p>
                            <span>+(426) 742 26 44 <br></br>
                                +(224) 762 442 32</span>
                        </div>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" placeholder="subject" className="input input-bordered" />

                            </div>

                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send your massege</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;