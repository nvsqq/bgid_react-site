import React from 'react';
import '../styles/Loader.scss';

function Loader() {
  return (
    <svg className='loader' viewBox='25 25 50 50'>
      <circle r='20' cy='50' cx='50'></circle>
    </svg>
  );
}

export default Loader;
