import React from 'react';
import { Link } from 'react-router-dom';

const CousesSummaryCard = ({ courses }) => {
    console.log(courses)
    const { picture, title,details,id } = courses;
    return (
        <div className=''>
            <div className="card w-96 ml-7 mt-6 mb-3 bg-base-100  shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    {
                        details.length > 100 ?
                            <>{details.slice(0, 100) + "...."}<Link to={`/courses/${id}`}>Read More</Link></>
                            : <>{details}</>
                    }
                    <div className="card-actions justify-end">
                        <Link className="btn btn-outline btn-secondary">Buy now</Link>
                        <Link to={`/courses/${id}`} className="btn">Ditails</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CousesSummaryCard;