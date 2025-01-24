import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.scss';

function NotFound() {
  return (
    <>
      <head>
        <title>404 | Бгид</title>
      </head>
      <div className='NotFound'>
        <h1>Ошибка 404...</h1>
        <p>Страница не найдена =(</p>
        <button className='button'>
          <Link to='/'>Вернуться на главную</Link>
        </button>
      </div>
    </>
  );
}

export default NotFound;
