import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogSummary from '../../Sheared/Blogsummry/BlogSummary';

const Blog = () => {
    const blog = useLoaderData();

    return (
        <div className='mt-12 mb-28'>
            <h1 className='text-5xl font-bold text-cyan-800'>Blog post For better Know!</h1>
       {
           blog.map(blog =><BlogSummary key={blog._id} blog={blog}></BlogSummary>)
       }
        </div>
    );
};

export default Blog;