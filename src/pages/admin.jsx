import React, { useState, useEffect } from 'react';
import '../styles/Admin.scss';

function Admin() {
  const [comments, setComments] = useState([]);
  const [contactForms, setContactForms] = useState([]);
  const [currentCommentsPage, setCurrentCommentsPage] = useState(1);
  const [currentFormsPage, setCurrentFormsPage] = useState(1);
  const itemsPerPage = 3;

  const getPageItems = (items, currentPage) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return items.slice(indexOfFirstItem, indexOfLastItem);
  };

  const loadComments = async () => {
    try {
      const response = await fetch('https://672a01fc6d5fa4901b6f58b6.mockapi.io/comments');
      const data = await response.json();
      setComments(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Ошибка при загрузке комментариев:', error);
    }
  };

  const loadContactForms = async () => {
    try {
      const response = await fetch('https://674a4834868020296634188a.mockapi.io/users');
      const data = await response.json();
      setContactForms(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Ошибка при загрузке форм:', error);
    }
  };

  useEffect(() => {
    loadComments();
    loadContactForms();
  }, []);

  const handleDeleteComment = async (commentId) => {
    try {
      const response = await fetch(
        `https://672a01fc6d5fa4901b6f58b6.mockapi.io/comments/${commentId}`,
        {
          method: 'DELETE',
        }
      );
      if (response.ok) {
        loadComments();
      }
    } catch (error) {
      console.error('Ошибка при удалении комментария:', error);
    }
  };

  const handleDeleteForm = async (formId) => {
    try {
      const response = await fetch(`https://674a4834868020296634188a.mockapi.io/users/${formId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        loadContactForms();
      }
    } catch (error) {
      console.error('Ошибка при удалении формы', error);
    }
  };

  const Pagination = ({ totalItems, currentPage, setCurrentPage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const getPageNumbers = () => {
      const pages = [];
      for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
          pages.push(i);
        } else if (pages[pages.length - 1] !== '...') {
          pages.push('...');
        }
      }
      return pages;
    };

    return (
      <>
        <head>
          <title>admin</title>
        </head>

        <div className='pagination'>
          <div className='pagination-numbers'>
            {getPageNumbers().map((page, index) =>
              page === '...' ? (
                <span key={`ellipsis-${index}`} className='ellipsis'>
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                >
                  {page}
                </button>
              )
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className='admin-panel'>
      <h1 className='admin-panel-title'>Панель администратора</h1>

      <section className='comments-section'>
        <h2>Комментарии</h2>
        <div className='comments-list'>
          {getPageItems(comments, currentCommentsPage).map((comment) => (
            <div key={comment.id} className='comment-item'>
              <h3>Имя: {comment.name}</h3>
              <p>Текст: {comment.text}</p>
              <p>ID достопримечательности: {comment.attractionId}</p>
              <button onClick={() => handleDeleteComment(comment.id)} className='delete-btn'>
                Удалить
              </button>
            </div>
          ))}
        </div>
        <Pagination
          totalItems={comments.length}
          currentPage={currentCommentsPage}
          setCurrentPage={setCurrentCommentsPage}
        />
      </section>

      <section className='forms-section'>
        <h2>Формы обратной связи</h2>
        <div className='forms-list'>
          {getPageItems(contactForms, currentFormsPage).map((form) => (
            <div key={form.id} className='form-item'>
              <h3>
                Имя: {form.firstName} {form.lastName}
              </h3>
              <p>Email: {form.email}</p>
              <p>Телефон: {form.phone}</p>
              <p>Сообщение: {form.message}</p>
              <button onClick={() => handleDeleteForm(form.id)} className='delete-btn'>
                Удалить
              </button>
            </div>
          ))}
        </div>
        <Pagination
          totalItems={contactForms.length}
          currentPage={currentFormsPage}
          setCurrentPage={setCurrentFormsPage}
        />
      </section>
    </div>
  );
}

export default Admin;
