import React from 'react';
import { useQueryClient } from '@tanstack/react-query';

function Filter({ activeFilter, onFilterChange }) {
  const queryClient = useQueryClient();

  const handleFilterClick = (filter) => {
    onFilterChange(filter);
    queryClient.invalidateQueries(['attractions', filter]);
  };

  return (
    <div className='catalog__filters'>
      <button
        className={`catalog__filter-btn ${activeFilter === 'Памятники' ? 'active' : ''}`}
        onClick={() => handleFilterClick('Памятники')}
      >
        Памятники
      </button>
      <button
        className={`catalog__filter-btn ${activeFilter === 'Музеи' ? 'active' : ''}`}
        onClick={() => handleFilterClick('Музеи')}
      >
        Музеи
      </button>
      <button
        className={`catalog__filter-btn ${activeFilter === 'Парки' ? 'active' : ''}`}
        onClick={() => handleFilterClick('Парки')}
      >
        Парки
      </button>
      <button
        className={`catalog__filter-btn ${activeFilter === 'Храмы и церкви' ? 'active' : ''}`}
        onClick={() => handleFilterClick('Храмы и церкви')}
      >
        Храмы и церкви
      </button>
      <button
        className={`catalog__filter-btn ${activeFilter === 'Театры' ? 'active' : ''}`}
        onClick={() => handleFilterClick('Театры')}
      >
        Театры
      </button>
      <button
        className={`catalog__filter-btn ${activeFilter === 'Фонтаны' ? 'active' : ''}`}
        onClick={() => handleFilterClick('Фонтаны')}
      >
        Фонтаны
      </button>
      <button
        className={`catalog__filter-btn ${activeFilter === 'Площади' ? 'active' : ''}`}
        onClick={() => handleFilterClick('Площади')}
      >
        Площади
      </button>
      <button
        className={`catalog__filter-btn ${activeFilter === 'Все' ? 'active' : ''}`}
        onClick={() => handleFilterClick('Все')}
      >
        Сбросить фильтры
      </button>
    </div>
  );
}

export default Filter;
