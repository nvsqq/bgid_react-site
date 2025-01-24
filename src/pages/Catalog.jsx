import React, { useState, useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import '../styles/Catalog.scss';
import Filter from '../components/Filter';
import Cart from '../components/Cart';
import Sorting from '../components/Sorting';
import Search from '../components/Search';
import CartSkeleton from '../components/CartSkeleton';

function Catalog() {
  const [activeFilter, setActiveFilter] = useState('Все');
  const [activeSort, setActiveSort] = useState('attendance&order=desc');
  const [searchQuery, setSearchQuery] = useState('');
  const observerTarget = useRef(null);

  const handleFilterChange = (newFilter) => {
    setActiveFilter(newFilter);
  };

  const handleSortChange = (newSort) => {
    setActiveSort(newSort);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const { data, fetchNextPage, hasNextPage, isLoading, isError, error } = useInfiniteQuery({
    queryKey: ['attractions', activeFilter, activeSort, searchQuery],
    queryFn: async ({ pageParam = 1 }) => {
      let url = 'https://672a01fc6d5fa4901b6f58b6.mockapi.io/catalog/catalog';

      const params = new URLSearchParams();

      if (activeFilter !== 'Все') {
        params.append('filtr', activeFilter);
      }

      const [sortField, orderDirection] = activeSort.split('&order=');
      params.append('sortBy', sortField);
      params.append('order', orderDirection);

      if (searchQuery.trim()) {
        params.append('search', searchQuery.trim());
        params.append('title', searchQuery.trim());
      }

      params.append('page', pageParam);
      params.append('limit', 5);

      const queryString = params.toString();
      url += `?${queryString}`;

      const response = await fetch(url);

      if (response.status === 404) {
        return { items: [], total: 0, hasMore: false };
      }

      if (!response.ok) {
        throw new Error('Ошибка сети');
      }

      const items = await response.json();
      return {
        items,
        nextPage: items.length === 5 ? pageParam + 1 : undefined,
      };
    },
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  const allItems = data?.pages.flatMap((page) => page.items) ?? [];

  return (
    <>
      <head>
        <title>Каталог | Бгид</title>
      </head>

      <section className='catalog'>
        <div className='container'>
          <div className='catalog__wrap'>
            <div className='catalog__left-block'>
              <div
                className='catalog__title'
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                Каталог достопримечательностей
              </div>
              <Filter activeFilter={activeFilter} onFilterChange={handleFilterChange} />

              <Sorting activeSort={activeSort} onSortChange={handleSortChange} />
              <Search searchQuery={searchQuery} onSearchChange={handleSearchChange} />
            </div>

            <div className='catalog__right-block'>
              {isLoading ? (
                <div className='catalog__container'>
                  {[...Array(6)].map((_, index) => (
                    <CartSkeleton key={index} />
                  ))}
                </div>
              ) : isError ? (
                <div className='catalog__message catalog__message--error'>
                  Ошибка: {error.message}
                </div>
              ) : !allItems || allItems.length === 0 ? (
                <div className='catalog__message catalog__message--not-found'>
                  Ничего не найдено
                </div>
              ) : (
                <>
                  <div className='catalog__container'>
                    {allItems.map((item) => (
                      <Cart key={item.id} item={item} />
                    ))}
                  </div>
                  <div ref={observerTarget} style={{ height: '20px' }} />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Catalog;
