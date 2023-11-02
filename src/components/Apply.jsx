import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot , faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Apply = ( {jobes}) => {
    const {
        jobcategoryicon,
        categorytitle,
        companyName,
        location,
        salary,
        remote,
        id,} = jobes;
    return (
        <div className="bg-white w-auto h-full p-10 rounded-lg border-2 border-slate-100">
        <img src={jobcategoryicon} alt="" />
        <h2 className="text-2xl font-extrabold not-italic leading-normal pt-8 pb-1">
          {categorytitle}
        </h2>
        <p className="text-xl font-sans font-extrabold text-black">
          {companyName}
        </p>
        <div className="space-x-2 pt-4 pb-6">
          <button className="buttlon-style">{remote[0]}</button>
          <button className="buttlon-style">{remote[1]}</button>
        </div>
        <div className="gap-12">
              <p className="text-xl font-sans font-bold text-black"> <FontAwesomeIcon icon={faLocationDot} /> {location}</p>
               <p className="text-base font-sans font-bold text-black"><FontAwesomeIcon icon={faSackDollar} /> {salary}</p>
  
              
        </div>
        <div className="pt-8 pb-8">
        <Link to={`/jobedetiles/${id}`}  className="btn-titles">View Details</Link>
        </div>
      </div>
    );
};

export default Apply;