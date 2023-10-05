import React from 'react';

const Total = (props) => {
  return (
    <div className='bg-neutral-700 col-span-2'>
      <div className='text-slate-200 m-2'>Total Sensor(s)</div>
      <div className='h-2/3 text-lg text-green-600 flex items-center justify-center'>
        {props.data.length}
      </div>
    </div>
  );
};

export default Total;
