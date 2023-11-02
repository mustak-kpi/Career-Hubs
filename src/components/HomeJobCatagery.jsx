import { list } from 'postcss';
import React from 'react';
import Catagory from './Catagory';

const HomeJobCatagery = ( {jobcatagory}) => {
  
    return (
        <section>
         <div className='container mx-auto'>
             <div className='mt-20 mb-20'>
                <h1 className='titles'>Job Category List</h1>
                <p className='my-documents'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='flex justify-center space-x-4'>
                   {
                    jobcatagory.map(jobtitle => <Catagory 
                    key ={jobtitle.id}
                    jobtitle = {jobtitle}
                    ></Catagory>)
                   }
                </div>
             </div>
         </div>
        </section>
    );
};

export default HomeJobCatagery;