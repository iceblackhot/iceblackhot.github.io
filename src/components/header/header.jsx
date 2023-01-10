import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {Context} from '../context';
import BurgerBtn from './burgerBtn/burgerBtn';

import './header.scss';
import {Main} from './menu/main/main';

function Header() {
  const {switchToggled, setSwitchToggled} = useContext(Context);

  const classNameHeader = `marvel__header${switchToggled ? ' active' : ''}`;
  const classNameNav = `comics-menu__nav${switchToggled ? ' active' : ''}`;

  const closeMobileMenu = () => {
    setSwitchToggled(!switchToggled);
  };

  return (
    <header className={classNameHeader}>
      <BurgerBtn />
      <Main />
      <nav className={classNameNav}>
        <ul className="marvel__menu-list">
          <li className="marvel__menu-item">
            <NavLink
              data-name="Main"
              className="marvel__menu-link"
              to={'/main'}
              onClick={closeMobileMenu}>
              Main
            </NavLink>
          </li>
          <li className="marvel__menu-item">
            <NavLink
              data-name="Comics"
              className="marvel__menu-link"
              to={'/comics'}
              onClick={closeMobileMenu}>
              Comics
            </NavLink>
          </li>
          <li className="marvel__menu-item">
            <NavLink
              data-name="Heroes"
              className="marvel__menu-link"
              to={'/heroes'}
              onClick={closeMobileMenu}>
              Heroes
            </NavLink>
          </li>
          <li className="marvel__menu-item">
            <NavLink
              data-name="Movies"
              className="marvel__menu-link"
              to={'/movies'}
              onClick={closeMobileMenu}>
              Movies
            </NavLink>
          </li>
          <li className="marvel__menu-item">
            <NavLink
              data-name="Games"
              className="marvel__menu-link"
              to={'/games'}
              onClick={closeMobileMenu}>
              Games
            </NavLink>
          </li>
          <li className="marvel__menu-item">
            <NavLink
              data-name="Sign in"
              className="marvel__menu-link"
              to={'/signin'}
              onClick={closeMobileMenu}>
              Sign in
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
