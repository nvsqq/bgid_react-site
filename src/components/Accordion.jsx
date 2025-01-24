import React, { useState } from 'react';
import '../styles/Accordion.scss';

function Accordion({ obj }) {
  const [activePanel, setActivePanel] = useState(null);

  const handleClick = (index) => {
    setActivePanel(activePanel === index ? null : index);
  };

  return (
    <section className='section-acc'>
      {obj &&
        obj.map((elem, index) => (
          <div key={index} className={`container-${index % 2 === 0 ? 'right' : ''}`}>
            <img className='img-acc' src={elem.img} alt='1213' />

            <div className='text'>
              <h2>{elem.title}</h2>

              <div className='accordion'>
                {elem.descriptions &&
                  elem.descriptions.map((acc, accIndex) => (
                    <div key={accIndex}>
                      <button
                        className='accordion-btn'
                        onClick={() => handleClick(`${index}-${accIndex}`)}
                      >
                        {acc.title}
                      </button>

                      <div
                        className='panel'
                        style={{
                          display: activePanel === `${index}-${accIndex}` ? 'block' : 'none',
                        }}
                      >
                        <p>{acc.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}

export default Accordion;
