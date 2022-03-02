import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import BurgerBtn from '../burgerBtn/burgerBtn'


import './header.scss';

function Header() {
  const [switchToggled, setSwitchToggled] = useState(false);

  const classNameHeader = `marvel-header${switchToggled ? ' active' : ''}`;
  const classNameNav = `marvel-header__nav${switchToggled ? ' active' : ''}`;

  return (
    <header className={classNameHeader}>
      <BurgerBtn switchToggled={switchToggled} setSwitchToggled={setSwitchToggled} />
      <nav className={classNameNav}>
        <ul className="marvel-header__list">
          <li className="marvel-header__item">
            <NavLink
              data-name="Main"
              className="marvel-header__link"
              to={'/'}
              onClick={switchToggled}>
              Main
            </NavLink>
          </li>
          <li className="marvel-header__item">
            <NavLink
              data-name="Comics"
              className="marvel-header__link"
              to={'/comics'}
              onClick={switchToggled}>
              Comics
            </NavLink>
          </li>
          <li className="marvel-header__item">
            <NavLink
              data-name="Heroes"
              className="marvel-header__link"
              to={'/heroes'}
              onClick={switchToggled}>
              Heroes
            </NavLink>
          </li>
          <li className="marvel-header__item">
            <NavLink
              data-name="Movies"
              className="marvel-header__link"
              to={'/movies'}
              onClick={switchToggled}>
              Movies
            </NavLink>
          </li>
          <li className="marvel-header__item">
            <NavLink
              data-name="Games"
              className="marvel-header__link"
              to={'/games'}
              onClick={switchToggled}>
              Games
            </NavLink>
          </li>
          <li className="marvel-header__item">
            <NavLink
              data-name="Sign in"
              className="marvel-header__link"
              to={'/signin'}
              onClick={switchToggled}>
              Sign in
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
