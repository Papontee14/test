import React from 'react';

import { temp_sensor, humi_sensor } from './data/data';

import Header from './component/Header';
import Total from './component/Total';
import Device from './component/Device';
import Temperature from './component/Temperature';
import TempGraph from './component/TempGraph';
import HumidityGraph from './component/HumidityGraph';

function App() {
  return (
    <div className='App bg-neutral-900 h-screen'>
      <div>
        <Header />
      </div>

      <div>
        <div className='grid grid-cols-12 gap-2 h-1/3 px-4 mb-2'>
          <Total data={temp_sensor} />
          <Device name='Last Temperature' data={temp_sensor} />
          <Device name='Last Humidity' data={humi_sensor} />
          <Temperature data={temp_sensor} />
        </div>
        <div className='grid grid-cols-12 gap-2 h-1/3 px-4 mb-2'>
          <TempGraph name='Temperature' />
          <HumidityGraph name='Humidity' />
        </div>
        <div className='grid grid-cols-12 gap-2 h-1/3 px-4'>
          <TempGraph name='Soil_temperature' />
          <HumidityGraph name='Soil_humidity' />
        </div>
      </div>
    </div>
  );
}

export default App;
