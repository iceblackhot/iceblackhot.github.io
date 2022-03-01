import React from 'react';

import './marvelButton.scss';

export const MarvelButton = () => {
  return (
    <>
      <a href="./" className="marvel-button">
        <span className="marvel-button__line marvel-button__line-top"></span>
        <span className="marvel-button__line marvel-button__line-right"></span>
        <span className="marvel-button__line marvel-button__line-bottom"></span>
        <span className="marvel-button__line marvel-button__line-left"></span>
        info
      </a>
    </>
  );
};
