import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJobs from './AppliedJobs';

const ApplayAll = () => {
   
    const {cart} = useLoaderData()

    return (
        <div className='container mx-auto'>
            <h1 className="text-center text-4xl font-extrabold font-serif -mt-16">applied jobs</h1>
            <div className=''>
                {
                    cart.map(jobsdetiles => <AppliedJobs
                    key={jobsdetiles.id}
                    jobsdetiles={jobsdetiles}
                    ></AppliedJobs>)
                }
            </div>
        </div>
    );
};

export default ApplayAll;