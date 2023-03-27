import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftsideNave = () => {
    const [course, setCatagoris] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(data => setCatagoris(data))
    }, [])
    return (
        <div className='mt-5 ml-12 mb-10'>
            <h3 className='text-4xl mb-10 text-amber-800'>Explore
              <br></br>  Our Popular Courses</h3>
            <div>
                {
                   course.map(course => <p key={course.id}><Link className='btn btn-outline btn-secondary mb-3' to={`/course/${course._id}`}>{course.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftsideNave;