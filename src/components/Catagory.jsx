import React from 'react';

const Catagory = ({jobtitle}) => {
const {id , categorytitle , jobcategoryicon, avilablejob} = jobtitle
    return (
        <div className='bg-slate-50  w-full  h-72 p-16 mt-20  rounded-lg border-2 border-indigo-100'>
         <img className='bg-slate-200 p-6' src={jobcategoryicon} alt="" />
           <h2 className=' text-2xl font-extrabold text-black font-serif pt-6'>{categorytitle}</h2>
           <p className='text-base font-medium font-sans text-gray-500 pt-2'>{avilablejob} +Jobs Available</p>
        </div>
    );
};

export default Catagory;