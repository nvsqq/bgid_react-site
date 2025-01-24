import React from 'react';
import '../styles/Attractions.scss';
import AttractionsCart from '../components/AttractionsCart';

function Attractions() {
  return (
    <>
      <head>
        <title>Достопремичательности | Бгид</title>
      </head>
      <section>
        <div className='card'>
          <AttractionsCart />
        </div>
      </section>
    </>
  );
}
export default Attractions;
