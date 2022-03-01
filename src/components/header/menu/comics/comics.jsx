import React from 'react';

import './comics.scss';

import oops from '../../../assets/deadpool-ooops.jpg';

export const Comics = () => {
  return (
    <>
      <section className="comics">
        <div className="comics__title-holder">
          <h1>Ooops!!! Comics page is under development</h1>
        </div>
        <div className="comics__img-holder">
          <img className="comics__img" src={oops} alt="Deadpool oops img" />
        </div>
      </section>
    </>
  );
};
