import React, {useContext} from 'react';
import {Context} from '../../context';

import './burgerBtn.scss';

function BurgerBtn() {
  const {switchToggled, ToggleSwitch} = useContext(Context);

  const classNameBtn = `marvel__btn-burger${switchToggled ? ' active' : ''}`;

  return (
    <div className={classNameBtn} onClick={ToggleSwitch}>
      <span />
    </div>
  );
}
export default BurgerBtn;
