import React from 'react';

const Device = (props) => {
  return (
    <div className='bg-neutral-700 col-span-3'>
      <div className='text-slate-200 m-2'>{props.name}</div>
      <div className='h-44 p-2 overflow-y-scroll'>
        <table className='table-auto w-full'>
          <thead>
            <tr>
              <th className='text-slate-200 text-left'>device_name</th>
              <th className='text-slate-200 text-right'>last_temp</th>
            </tr>
          </thead>
          <tbody>
            {props.data?.map((s) => {
              return (
                <tr className='border-slate-400 border border-x-0' key={s.name}>
                  <td className='text-slate-200 border-slate-500 border border-l-0'>{s.name}</td>
                  <td className='text-slate-200 text-right'>{s.temp}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Device;
