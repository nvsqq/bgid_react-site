import React, { useState, useEffect, useCallback } from 'react';

function Comments() {
  const itemid = parseInt(new URLSearchParams(window.location.search).get('attraction-id'));
  const [comments, setComments] = useState([]);
  const [isRobot, setIsRobot] = useState(true);
  const [message, setMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 3;

  const loadComments = useCallback(async () => {
    try {
      const response = await fetch(
        `https://672a01fc6d5fa4901b6f58b6.mockapi.io/comments?attractionId=${itemid}`
      );
      const data = await response.json();
      setComments(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Ошибка при загрузке отзывов:', error);
      setComments([]);
    }
  }, [itemid]);

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);
  const totalPages = Math.ceil(comments.length / commentsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    loadComments();
  }, [loadComments]);

  const handleDelete = async (commentId) => {
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
      console.error('Ошибка при удалении отзыва:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const text = e.target.text.value;

    if (name && text) {
      try {
        const response = await fetch('https://672a01fc6d5fa4901b6f58b6.mockapi.io/comments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name.trim(),
            text: text.trim(),
            attractionId: itemid,
          }),
        });

        if (response.ok) {
          loadComments();
          e.target.reset();
          setIsRobot(true);
          setMessage('');
        }
      } catch (error) {
        console.error('Ошибка при добавлении отзыва:', error);
      }
    }
  };

  const handleCaptchaChange = (e) => {
    setIsRobot(!e.target.checked);
    setMessage(e.target.checked ? 'Поздравляем вы не робот!' : '');
  };

  return (
    <>
      <div className='comments-container'>
        <h3>Добавить отзыв</h3>
        <form onSubmit={handleSubmit} className='comment-form'>
          <input type='text' id='name' placeholder='Ваше имя' required />
          <textarea id='text' placeholder='Ваш отзыв' required></textarea>
          <div className='captcha'>
            <label className='checkbox-label'>
              <input type='checkbox' onChange={handleCaptchaChange} />
              <span></span>
            </label>
            <p>Я не робот</p>
          </div>
          <div style={{ color: isRobot ? 'red' : 'green' }}>{message}</div>
          <button disabled={isRobot} type='submit'>
            Отправить
          </button>
        </form>
      </div>

      <div className='comments-container'>
        <h3>Отзывы</h3>
        <div className='comments-list'>
          {currentComments.map((comment) => (
            <div key={comment.id} className='comment'>
              <div>
                <strong className='comment__name'>{comment.name}</strong>
                <p className='comment__text'>{comment.text}</p>
                <button className='delete-comment' onClick={() => handleDelete(comment.id)}>
                  <img
                    src='https://cdn-icons-png.flaticon.com/512/7709/7709786.png'
                    alt='delete'
                    className='delete-icon'
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className='pagination'>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`pagination__button ${currentPage === index + 1 ? 'active' : ''}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Comments;
