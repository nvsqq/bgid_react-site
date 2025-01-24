import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ item }) {
  return (
    <div className='catalog__plate' id={item.filtr} data-id={item.id}>
      <button className='btn'>
        <Link className='catalog__plate_link' to={`/attractions?attraction-id=${item.id}`}>
          <img src={item.imgs[0]} alt={item.title} className='catalog__container_plate_img' />
          <div className='catalog__plate_text'>
            <h4 className='catalog__plate_title'>{item.title}</h4>
            <h4 className='grade'>рейтинг: {item.rating}</h4>
            <h4 className='grade'>посещаемость: {item.attendance}</h4>
            <p className='catalog__plate_type'>{item.filtr}</p>
            <p className='catalog__plate_description'>{item.description_plate}</p>
          </div>
        </Link>
      </button>
    </div>
  );
}

export default Cart;
