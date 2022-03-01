import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import BurgerBtn from '../burgerBtn/burgerBtn'


import './header.scss';

function Header() {
  const [switchToggled, setSwitchToggled] = useState(false);

  const classNameHeader = `marvel__header${switchToggled ? ' active' : ''}`;
  const classNameNav = `comics-menu__nav${switchToggled ? ' active' : ''}`;

  return (
    <header className={classNameHeader}>
      <BurgerBtn switchToggled={switchToggled} setSwitchToggled={setSwitchToggled} />
      <nav className={classNameNav}>
        <ul className="marvel__menu-list">
          <li className="marvel__menu-item">
            <NavLink
              data-name="Main"
              className="marvel__menu-link"
              to={'/'}
              onClick={switchToggled}>
              Main
            </NavLink>
          </li>
          <li className="marvel__menu-item">
            <NavLink
              data-name="Comics"
              className="marvel__menu-link"
              to={'/comics'}
              onClick={switchToggled}>
              Comics
            </NavLink>
          </li>
          <li className="marvel__menu-item">
            <NavLink
              data-name="Heroes"
              className="marvel__menu-link"
              to={'/heroes'}
              onClick={switchToggled}>
              Heroes
            </NavLink>
          </li>
          <li className="marvel__menu-item">
            <NavLink
              data-name="Movies"
              className="marvel__menu-link"
              to={'/movies'}
              onClick={switchToggled}>
              Movies
            </NavLink>
          </li>
          <li className="marvel__menu-item">
            <NavLink
              data-name="Games"
              className="marvel__menu-link"
              to={'/games'}
              onClick={switchToggled}>
              Games
            </NavLink>
          </li>
          <li className="marvel__menu-item">
            <NavLink
              data-name="Sign in"
              className="marvel__menu-link"
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
