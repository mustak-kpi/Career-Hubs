import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Jobexprient from "./Jobexprient";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([])

const jobedata = async () => {
  const jobedata = await fetch ('featuredjobs.json')
  const jobs = await jobedata.json()
   
  if(jobs.length > 4){
    const anatherdata = jobs.slice(0, 4)
    setJobs(anatherdata)
  }
}

useEffect(()=>{
  jobedata()
},
[])

  return (
    <section>
      <div className="container mx-auto">
        <div className=" text-center">
          <h1 className="titles">Featured Jobs</h1>
          <p className="my-documents">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-10">
           {
            jobs.map(job => <Jobexprient
            key={job.id}
            job={job}
            ></Jobexprient>)
           }
        </div>
        <div className="text-center ">
          <button className="btn-titles m-10"> see all jobs</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
