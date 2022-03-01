import React from 'react';

import './games.scss';

import oops from '../../../assets/deadpool-ooops.jpg';

export const Games = () => {
  return (
    <>
      <section className="games">
        <div className="games__title-holder">
          <h1>Ooops!!! Games page is under development</h1>
        </div>
        <div className="games__img-holder">
          <img className="games__img" src={oops} alt="Deadpool oops img" />
        </div>
      </section>
    </>
  );
};
