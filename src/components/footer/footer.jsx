import { Link } from 'react-router-dom';
import './footer.scss';

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='footer__wrap'>
          <div className='footer__info'>
            <div className='footer__title'>Подробнее</div>
            <ul>
              <li>
                <Link to='/'>главная</Link>
              </li>
            </ul>
          </div>
          <div className='footer__info'>
            <div className='footer__title'>Информация</div>
            <ul>
              <li>
                <a href='https://disk.yandex.ru/i/2GwDre56QeFh2w' target='_blank' rel='noreferrer'>
                  политика <br />
                  конфиденциальности
                </a>
              </li>
              <li>
                <Link to='/contact'>Контакты</Link>
              </li>
            </ul>
          </div>
          <div className='footer__logo'>
            <img
              src='https://github.com/nvsqq/Bgid/blob/main/assets/img/b-logo.png?raw=true'
              alt='logo'
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
