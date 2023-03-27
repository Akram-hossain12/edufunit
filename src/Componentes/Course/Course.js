import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CousesSummaryCard from '../../Sheared/CoursesSummaryCard/CousesSummaryCard';

const Course = () => {
    const allCatagoryCourses = useLoaderData();
    return (
        <div className='w-[800px] grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
            {allCatagoryCourses.map(courses => <CousesSummaryCard 
            key={courses.id}
            courses={courses}
            >
            </CousesSummaryCard>)}
        </div>
    );
};

export default Course;