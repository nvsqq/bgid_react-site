import React, { useState, useEffect } from 'react';
import '../styles/Contact.scss';

function Contact() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value,
    };

    try {
      const response = await fetch('https://674a4834868020296634188a.mockapi.io/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Форма успешно отправлена!');
        event.target.reset();
        closeModal();
      } else {
        throw new Error('Что-то пошло не так');
      }
    } catch (error) {
      alert('Произошла ошибка при отправке формы: ' + error.message);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <>
      <head>
        <title>Контакты | Бгид</title>
      </head>
      <section className='main'>
        <div className='container'>
          <div className='main__wrap'>
            <div className='title'>Контакты</div>
            <div className='main__cards'>
              <div className='main__info'>
                <div className='main__titl'>Режим работы</div>
                <p>
                  С понедельника по пятницу <br />
                  с 09:00 до 19:00 ч.
                  <br /> В субботу с 10:00 до 15:00 ч. <br />
                  Воскресенье - выходной день
                </p>
              </div>
              <div className='main__info'>
                <div className='main__titl'>
                  сотрудничество
                  <br />
                  (Контакты)
                </div>
                <p>
                  По вопросам сотрудничества (рекламы, промо-акций, кросс-маркетинговых коммуникаций
                  и т.д.) обращаться в Отдел маркетинга: serbroser47@gmail.com
                  <br />
                  +7(929)003-32-03
                </p>
              </div>
              <div className='main__form'>
                <div className='main__titl'>вопросы</div>
                <p>По вопросам или другим причинам можете написать нам, мы обязательно ответим.</p>
                <button className='main__btn' onClick={openModal}>
                  Связаться с нами
                </button>
                {isModalOpen && (
                  <div className='modal' onClick={closeModal}>
                    <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                      <span className='close' onClick={closeModal}>
                        &times;
                      </span>
                      <h2>Форма обратной связи</h2>
                      <form id='contactForm' className='forms' onSubmit={handleSubmit}>
                        <label htmlFor='firstName'>Имя:</label>
                        <input
                          type='text'
                          placeholder='Сергей'
                          id='firstName'
                          name='firstName'
                          required
                        />

                        <label htmlFor='lastName'>Фамилия:</label>
                        <input
                          type='text'
                          placeholder='Смирнов'
                          id='lastName'
                          name='lastName'
                          required
                        />

                        <label htmlFor='email'>Электронная почта:</label>
                        <input
                          type='email'
                          placeholder='serbroser47@gmail.com'
                          id='email'
                          name='email'
                          required
                        />

                        <label htmlFor='phone'>Телефон:</label>
                        <input
                          type='tel'
                          pattern='\d*'
                          placeholder='+7(929)003-32-03'
                          minLength='11'
                          maxLength='16'
                          id='phone'
                          name='phone'
                          required
                        />

                        <label htmlFor='message'>Сообщение:</label>
                        <textarea
                          id='message'
                          placeholder='Задайте вопрос или опишите свою проблему...'
                          name='message'
                          required
                        ></textarea>

                        <button className='forms__btn' type='submit'>
                          Отправить
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
