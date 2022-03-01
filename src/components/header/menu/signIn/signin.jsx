import React, {useState} from 'react';

import './signIn.scss';

// import bg from '../../../assets/avengers-full-bg.png';

export const SignIn = () => {
  const [switchToggled, setSwitchToggled] = useState(false);

  const ToggleSwitch = () => setSwitchToggled(!switchToggled);
  const classFormboxActv = `signin__form-box${switchToggled ? ' active' : ''}`;
  const classIgninActv = `signin${switchToggled ? ' active' : ''}`;

  return (
    <>
      <section className={classIgninActv}>
        <div className="signin__title">
          <h1>Sign in</h1>
        </div>
        <div className="signin__container">
          <div className="signin__blue-bg">
            <div className="signin__box box">
              <h3>Already have an account ?</h3>
              <button className="signin__btn btn" onClick={ToggleSwitch}>
                Sign in
              </button>
            </div>
            <div className="signup__box box">
              <h3>Don't have an account ?</h3>
              <button className="signup__btn btn" onClick={ToggleSwitch}>
                Sign up
              </button>
            </div>
          </div>
          <div className={classFormboxActv}>
            <div className="signin__form-holder form-holder">
              <form className="signin__form">
                <div className="signin__title-holder">
                  <h3>Sign in</h3>
                </div>
                <input className="signin__name signin__input" type="text" placeholder="Username" />
                <input
                  className="signin__password signin__input"
                  type="password"
                  placeholder="Password"
                />
                <input className="signin__login signin__input" type="submit" value="Login" />
                <a href={''} className="signin__forgot">
                  Forgot Password ?
                </a>
              </form>
            </div>
            <div className="signup__form-holder form-holder">
              <form className="signup__form">
                <div className="signup__title-holder">
                  <h3>Sign up</h3>
                </div>
                <input className="signup__name signin__input" type="text" placeholder="Username" />
                <input
                  className="signup__email signin__input"
                  type="text"
                  placeholder="Email Address"
                />
                <input
                  className="signup__password signin__input"
                  type="password"
                  placeholder="Password"
                />
                <input
                  className="signup__confirm signin__input"
                  type="password"
                  placeholder="Confirm Password"
                />
                <input className="signup__register signup__input" type="submit" value="Register" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
