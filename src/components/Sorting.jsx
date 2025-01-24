import React from 'react';

function Sorting({ onSortChange, activeSort }) {
  return (
    <div className='box'>
      <label htmlFor='sortBy'>Сортировать по:</label>
      <select id='sortBy' value={activeSort} onChange={(e) => onSortChange(e.target.value)}>
        <option value='attendance&order=desc'>По посещаемости (по убыванию)</option>
        <option value='attendance&order=asc'>По посещаемости (по возрастанию)</option>
        <option value='rating&order=desc'>По рейтингу (по убыванию)</option>
        <option value='rating&order=asc'>По рейтингу (по возрастанию)</option>
        <option value='title&order=asc'>По названию (А-Я)</option>
        <option value='title&order=desc'>По названию (Я-А)</option>
      </select>
    </div>
  );
}

export default Sorting;
