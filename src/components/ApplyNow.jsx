import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Apply from './Apply';

const ApplyNow = () => {
    const jobeApplay = useLoaderData()
    return (
        <div className='container mx-auto'>
       <h1 className='text-center text-3xl font-extrabold not-italic mb-7 -mt-16 text-black'>Apply jobs</h1>
            <div className='grid grid-cols-3'>
                {
                    jobeApplay.map(jobes => <Apply key={jobes.id}
                        jobes = {jobes}
                    ></Apply>)
                }
            </div>
        </div>
    );
};

export default ApplyNow;