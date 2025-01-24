import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import SliderAttraction from './SliderAttraction';
import Comments from './Comments';
import Loader from './Loader';

function AttractionsCart() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const attractionId = searchParams.get('attraction-id');

  const {
    data: getItem,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['attraction', attractionId],
    queryFn: async () => {
      const response = await fetch(
        `https://672a01fc6d5fa4901b6f58b6.mockapi.io/catalog/catalog/${attractionId}`
      );
      if (!response.ok) {
        throw new Error('Ошибка загрузки данных');
      }
      return response.json();
    },
  });

  if (isLoading) {
    return <Loader />;
  }
  if (isError) return <div>Произошла ошибка при загрузке данных</div>;
  if (!getItem) return <div>Достопримечательность не найдена</div>;

  return (
    <>
      <div className='card'>
        <div className='container'>
          <div className='card__title'>
            <Link to='/catalog' style={{ width: '35px', height: '35px', marginRight: '50px' }}>
              <img
                src='https://github.com/nvsqq/Bgid/blob/main/assets/img/free-icon-arrow-left-9847479.png?raw=true'
                style={{ width: '35px', height: '35px' }}
                alt='back'
              />
            </Link>
            <p>{getItem.title}</p>
          </div>
          <div className='card__wrap'>
            <div className='card__card'>
              <SliderAttraction images={getItem.imgs} />
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <iframe
                  src={getItem.src_map}
                  allowFullScreen={true}
                  style={{ position: 'relative' }}
                  title={`Карта для ${getItem.title}`}
                ></iframe>
              </div>
            </div>
            <div className='card__card'>
              <div className='card__description'>
                <p>{getItem.description_attractions}</p>
              </div>
            </div>
          </div>
        </div>

        <Comments />
      </div>
    </>
  );
}

export default AttractionsCart;
