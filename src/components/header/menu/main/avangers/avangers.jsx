import React from 'react';
import {MarvelButton} from '../../button/marvelButton';

import './avangers.scss';

export const Avangers = () => {
  return (
    <>
      <section className="avg">
        <div className="avg__screen">
          <div className="avg__content">
            <h2>Iron man</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis cupiditate,
              deleniti distinctio doloremque eum hic maiores minima nesciunt nihil nisi nobis
              perferendis possimus quis reiciendis unde voluptas. Ab, iste.
            </p>
            <MarvelButton />
          </div>
        </div>
        <div className="avg__screen">
          <div className="avg__content">
            <h2>Captain America</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis cupiditate,
              deleniti distinctio doloremque eum hic maiores minima nesciunt nihil nisi nobis
              perferendis possimus quis reiciendis unde voluptas. Ab, iste.
            </p>
            <MarvelButton />
          </div>
        </div>
        <div className="avg__screen">
          <div className="avg__content">
            <h2>Thor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis cupiditate,
              deleniti distinctio doloremque eum hic maiores minima nesciunt nihil nisi nobis
              perferendis possimus quis reiciendis unde voluptas. Ab, iste.
            </p>
            <MarvelButton />
          </div>
        </div>
      </section>
    </>
  );
};
