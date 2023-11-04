import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot , faSackDollar } from '@fortawesome/free-solid-svg-icons'

const AppliedJobs = ({ jobsdetiles }) => {
  const {
    jobcategoryicon,
    categorytitle,
    companyName,
    location,
    salary,
    remote,
    id,
  } = jobsdetiles;
  return (
    <div className="w-full h-50 mt-16 mb-6 bg-slate-100 p-12">
      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <div>
            <img src={jobcategoryicon} alt="" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold not-italic leading-normal pt-8 pb-1">{categorytitle}</h2>
            <p className="text-xl font-sans font-extrabold text-black">{companyName}</p>
       <div className="space-x-1">
       <button className="buttlon-style">{remote[0]}</button>
          <button className="buttlon-style">{remote[1]}</button>
       </div>
         <div className="flex gap-4">
         <p className="text-xl font-sans font-bold text-black"> <FontAwesomeIcon icon={faLocationDot} /> {location}</p>
               <p className="text-base font-sans font-bold text-black"><FontAwesomeIcon icon={faSackDollar} /> {salary}</p>
         </div>
          </div>
        </div>
        <div>
          <button className="btn-titles">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
