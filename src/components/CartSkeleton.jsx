import React from 'react';
import ContentLoader from 'react-content-loader';

function CartSkeleton() {
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1024;

  return (
    <div className='cart'>
      <ContentLoader
        speed={2}
        width={isMobile ? 300 : isTablet ? 350 : 400}
        height={isMobile ? 400 : 500}
        viewBox={`0 0 ${isMobile ? 300 : isTablet ? 350 : 400} ${isMobile ? 400 : 500}`}
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
      >
        {/* картинка */}
        <rect x='0' y='0' rx='8' ry='8' width='100%' height={isMobile ? 200 : 250} />

        {/* название */}
        <rect
          x='20'
          y={isMobile ? 220 : 270}
          rx='4'
          ry='4'
          width={isMobile ? '260' : '360'}
          height='24'
        />

        {/* рейтинг */}
        <rect
          x='20'
          y={isMobile ? 320 : 390}
          rx='4'
          ry='4'
          width={isMobile ? '140' : '180'}
          height='20'
        />

        {/* Посещаемость */}
        <rect
          x='20'
          y={isMobile ? 350 : 420}
          rx='4'
          ry='4'
          width={isMobile ? '100' : '120'}
          height='20'
        />

        {/* Описание */}
        <rect
          x='20'
          y={isMobile ? 260 : 310}
          rx='4'
          ry='4'
          width={isMobile ? '260' : '360'}
          height={isMobile ? 40 : 60}
        />
      </ContentLoader>
    </div>
  );
}

export default CartSkeleton;
