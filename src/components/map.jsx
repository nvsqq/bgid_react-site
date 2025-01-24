import React, { useState } from 'react';
import '../styles/map.scss';

function Map() {
  const [activeMap, setActiveMap] = useState(0);

  const mapData = [
    {
      id: 'map1',
      title: 'Парки',
      iframeSrc:
        'https://yandex.ru/map-widget/v1/?display-text=%D0%9F%D0%B0%D1%80%D0%BA%20%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D1%8B%20%D0%B8%20%D0%BE%D1%82%D0%B4%D1%8B%D1%85%D0%B0&ll=36.588428%2C50.589646&mode=search&sll=36.588428%2C50.607577&sspn=0.361176%2C0.133269&text=%7B%22text%22%3A%22%D0%9F%D0%B0%D1%80%D0%BA%20%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D1%8B%20%D0%B8%20%D0%BE%D1%82%D0%B4%D1%8B%D1%85%D0%B0%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22category_id%22%2C%22attr_values%22%3A%5B%22184106346%22%5D%7D%5D%7D&z=11',
    },
    {
      id: 'map2',
      title: 'Развлечения',
      iframeSrc:
        'https://yandex.ru/map-widget/v1/?display-text=%D0%A0%D0%B0%D0%B7%D0%B2%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D1%8F&ll=36.592606%2C50.599519&mode=search&sctx=ZAAAAAgBEAAaKAoSCZnXEYdsUEJAEejaF9ALTUlAEhIJ4nMn2H8d5z8R5A8GnnsP0T8iBgABAgMEBSgKOABAioMGSAFqAnJ1nQHNzMw9oAEAqAEAvQGBrYcRwgGIAaDJu7kElaOr8fwFoOHHtX%2BU1oqwBpf5%2B8T%2BAZKViJpOup2UlgSm%2BN35hAK264buA97RlqaKAvfWqpYE35mWhATE%2BtauLo6Qz78Eppbx3wS8yorxA7Lu%2B6udBZ6E%2FImtBLXeossGprLh1Z8C8IiGkKIEv%2Fr%2BomvTxZeNlQTAstuVnAGEkcWa7gKCAhsoKGNhdGVnb3J5X2lkOigxODQxMDYzNDgpKSmKAgkxODQxMDYzNDiSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=36.592606%2C50.599519&sspn=0.361176%2C0.133292&text=%7B%22text%22%3A%22%D0%A0%D0%B0%D0%B7%D0%B2%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D1%8F%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22category_id%22%2C%22attr_values%22%3A%5B%22184106348%22%5D%7D%5D%7D&z=12',
    },
    {
      id: 'map3',
      title: 'Торговые центры',
      iframeSrc:
        'https://yandex.ru/map-widget/v1/?display-text=%D0%A2%D0%BE%D1%80%D0%B3%D0%BE%D0%B2%D1%8B%D0%B9%20%D1%86%D0%B5%D0%BD%D1%82%D1%80&ll=36.569274%2C50.597379&mode=search&sll=36.592606%2C50.599519&sspn=0.361176%2C0.133292&text=%7B%22text%22%3A%22%D0%A2%D0%BE%D1%80%D0%B3%D0%BE%D0%B2%D1%8B%D0%B9%20%D1%86%D0%B5%D0%BD%D1%82%D1%80%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22category_id%22%2C%22attr_values%22%3A%5B%22184108083%22%5D%7D%5D%7D&z=12',
    },
    {
      id: 'map4',
      title: 'Рестораны',
      iframeSrc:
        'https://yandex.ru/map-widget/v1/?display-text=%D0%A0%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD&ll=36.597774%2C50.583549&mode=search&sll=36.569274%2C50.597379&sspn=0.361176%2C0.133298&text=%7B%22text%22%3A%22%D0%A0%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22category_id%22%2C%22attr_values%22%3A%5B%22184106394%22%5D%7D%5D%7D&z=13',
    },
  ];

  return (
    <section className='map'>
      <div className='container'>
        <div className='map__warp'>
          <div className='map__title'>Карта</div>

          <div className='map__buttons'>
            {mapData.map((map, index) => (
              <button
                key={map.id}
                className={`map__btn ${activeMap === index ? 'active' : ''}`}
                onClick={() => setActiveMap(index)}
              >
                {map.title}
              </button>
            ))}
          </div>

          <div className='map__map'>
            {mapData.map((map, index) => (
              <div
                key={map.id}
                className='map-style'
                style={{ display: activeMap === index ? 'block' : 'none' }}
              >
                <iframe
                  src={map.iframeSrc}
                  width='560'
                  height='400'
                  frameBorder='1'
                  allowFullScreen={true}
                  title={map.title}
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map;
