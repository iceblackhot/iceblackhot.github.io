import React from 'react';

import './burgerBtn.scss';

function BurgerBtn({switchToggled, setSwitchToggled}) {
  const ToggleSwitch = () => setSwitchToggled(!switchToggled);

  const classNameBtn = `marvel__btn-burger${switchToggled ? ' active' : ''}`;

  return (
    <div className={classNameBtn} onClick={ToggleSwitch}>
      <span />
    </div>
  );
}
export default BurgerBtn;
