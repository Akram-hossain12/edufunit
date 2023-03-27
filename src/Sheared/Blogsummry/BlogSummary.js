import React from 'react';

const BlogSummary = ({blog}) => {
    console.log(blog)
    const {picture,title,details,author}=blog;
    return (
        <div className='mt-9'>
            
                 <div className="card card-compact w-[700px] bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                  <div className='m-6 flex justify-between items-center'>
                  <img className='rounded-full w-20 h-36'  style={{ height: '80px' }} src={author.img} alt="" />
                  <span>Name: {author.name}</span>
                  <span>published_date: {author.published_date}</span>
                  </div>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default BlogSummary;