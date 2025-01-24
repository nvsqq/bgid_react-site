import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <header className='header'>
      <img src='https://github.com/nvsqq/Bgid/blob/main/assets/img/bgid.png?raw=true' alt='bgid' />
      <div className='header__menu menu'>
        <div className={`menu__icon ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav
          className={`menu__body ${menuActive ? 'active' : ''}`}
          onClick={(e) => {
            if (e.target.classList.contains('menu__body')) closeMenu();
          }}
        >
          <ul className='menu__list'>
            <li className='menu__item'>
              <Link to='/catalog' className='menu__link' onClick={closeMenu}>
                туристам
              </Link>
            </li>
            <li className='menu__item'>
              <Link to='/' className='menu__link' onClick={closeMenu}>
                Главная
              </Link>
            </li>
            <li className='menu__item'>
              <Link to='/contact' className='menu__link' onClick={closeMenu}>
                Контакты
              </Link>
            </li>
            <li className='menu__item'>
              <Link to='/culture' className='menu__link' onClick={closeMenu}>
                Культура
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
