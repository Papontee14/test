import React from 'react';

const Temperature = (props) => {
  return (
    <div className='bg-neutral-700 col-span-4'>
      <div className='text-slate-200 m-2'>Temperature</div>
      <div className='h-44 p-2 overflow-y-scroll'>
        {props.data?.map((s) => {
          return (
            <div className='flex' key={s.name}>
              <div className='text-slate-200 w-4/12 text-sm'>{`Battery ${s.name}`}</div>
              <div className='bg-gradient-to-r from-red-600 from-10% via-yellow-400 via-40%  to-green-700 to-90% h-4 w-7/12 '></div>
              <div className='text-green-700 text-md text-right w-1/12'>100</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Temperature;
