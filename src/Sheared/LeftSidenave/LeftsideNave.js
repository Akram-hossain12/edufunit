import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftsideNave = () => {
    const [course, setCatagoris] = useState([]);

    useEffect(() => {
        fetch('https://edufunit-server.vercel.app/data')
            .then(res => res.json())
            .then(data => setCatagoris(data))
    }, [])
    return (
        <div className='mt-10 ml-12 mb-10'>
            <h3 className='text-5xl mb-10 text-cyan-800 font-bold'>Explore
              <br></br>  Our  Courses</h3>
            <div>
                {
                   course.map(course => <p key={course._id}><Link className='btn btn-outline btn-secondary mb-3' to={`/courses/${course._id}`}>{course.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftsideNave;