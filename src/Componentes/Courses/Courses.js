import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CousesSummaryCard from '../../Sheared/CoursesSummaryCard/CousesSummaryCard';

const Courses = () => {
    const allCoures = useLoaderData();
    return (
        <div className='grid grid-cols-2 w-[800px]'>
               {
                allCoures.map( courses => <CousesSummaryCard
                key={courses.id}
                courses={courses}
                
                ></CousesSummaryCard>)
            }
        </div>
    );
};

export default Courses;