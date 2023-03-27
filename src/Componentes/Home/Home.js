import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CousesSummaryCard from '../../Sheared/CoursesSummaryCard/CousesSummaryCard';

const Home = () => {
    const allCoures = useLoaderData();
    console.log(allCoures)
    return (
        <div className='grid  lg:grid-cols-2 md:grid-cols-1 w-[800px]'>
            {
                allCoures.map( courses => <CousesSummaryCard
                key={courses.id}
                courses={courses}
                
                ></CousesSummaryCard>)
            }
        </div>
    );
};

export default Home;