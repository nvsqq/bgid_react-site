import React from 'react';
import Slider from '../components/slider';
import Map from '../components/map';
import '../styles/Home.scss';
import { Link } from 'react-router-dom';

function Home({ elem }) {
  return (
    <>
      <head>
        <title>Бгид</title>
      </head>
      <Slider />
      <section className='main'>
        <div className='container'>
          <div className='main__title'>
            <h1>Белгород: город новшеств и традиций</h1>
          </div>
          <div className='main__card'>
            <div className='main__all'>
              <div className='main__text'>
                <div className='main__title-1'>Белгород</div>
                <p>
                  Белгород называют городом первого салюта: в августе 1943 года в Москве дали первый
                  артиллерийский салют в честь освобождения Орла и Белгорода от немецко-фашистских
                  захватчиков. Это была первая крупная победа советских войск в Курской битве —
                  одном из ключевых сражений Великой Отечественной войны. Читайте культурный гид
                  по самым известным достопримечательностям.
                </p>
              </div>
              <div className='main__img'>
                <img
                  src='https://github.com/nvsqq/Bgid/blob/main/assets/img/%D0%BA%D0%BD%D1%8F%D0%B7%D1%8C%20%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80.jpg?raw=true'
                  alt='князь Владимир'
                />
              </div>
            </div>

            <div className='main__card'>
              <div className='main__all'>
                <div className='main__text'>
                  <div className='main__title-1'>Кухня и рестораны Белгорода</div>
                  <p>
                    Белгородская кухня сформировалась под влиянием украинских кулинарных традиций.
                    Несколько лет назад местные власти решили привлечь внимание к старинным
                    рецептам, по которым в области готовили испокон веков, и издали гастрономический
                    путеводитель.
                    <br />
                    <br />
                    Белгород также славится мясом. При случае стоит зайти в гриль-бар и заказать
                    местную курицу, телятину или свинину, приготовленную на мангале.
                  </p>
                </div>
                <div className='main__img'>
                  <img
                    src='https://github.com/nvsqq/Bgid/blob/main/assets/img/tower.jpg?raw=true'
                    alt='князь Владимир'
                  />
                </div>
              </div>
            </div>

            <div className='main__card'>
              <div className='main__all'>
                <div className='main__text'>
                  <div className='main__title-1'>5 вещей, которые надо сделать в Белгороде</div>
                  <p>
                    1. Узнать об истории масштабного танкового сражения под Прохоровкой
                    в музее-диораме Курской битвы.
                    <br />
                    2. Сфотографироваться с памятником честному работнику ГАИ, торговцу-челноку или
                    дворнику.
                    <br />
                    3. Попробовать уху по старинному местному рецепту.
                    <br />
                    4. Сверить время по солнечным часам.
                    <br />
                    5. Привезти кориандровый мёд, купленный у белгородских пасечников.
                  </p>
                </div>
                <div className='main__img'>
                  <img
                    src='https://github.com/nvsqq/Bgid/blob/main/assets/img/watch.jpg?raw=true'
                    alt='солнечные часы'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='main__button'>
            <Link to='/catalog'>
              <button className='main__btnn'>Смотреть больше</button>
            </Link>
          </div>
        </div>
      </section>
      <Map />
    </>
  );
}

export default Home;
