import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CousesSummaryCard from '../../Sheared/CoursesSummaryCard/CousesSummaryCard';

const Home = () => {
    const allCoures = useLoaderData();
    console.log(allCoures)
   
    return (
    <div className='mt-8'>
        <div className='w-[800px] h-[450px]  bg-cyan-800 flex justify-center items-center'>
            <div>
                <h2 className='text-3xl text-fuchsia-400'>Access 2700+</h2>
                <h1 className='text-5xl my-4 font-bold text-white'>Online yellow-shapeTutorial <br /> From Top Instructor.</h1>
                <h5 className='text-lg font-semibold text-cyan-50'>Meet university,and cultural institutions, who'll share their experience.</h5>
               <Link  className='btn btn-secondary btn-outline mt-4' to='/courses'>Viwe all course</Link>
            </div>
        </div>
            <div className='grid  lg:grid-cols-2 md:grid-cols-1 w-[800px]'>
            {
                allCoures.map( courses => <CousesSummaryCard
                key={courses.id}
                courses={courses}
                
                ></CousesSummaryCard>)
            }
        </div>
    </div>
    );
};

export default Home;