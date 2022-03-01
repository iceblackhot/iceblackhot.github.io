import React, {useEffect, useRef} from 'react';

import {motion} from 'framer-motion';

import VanillaTilt from 'vanilla-tilt';

import './movieCard.scss';

function Tilt(props) {
  const {options, ...rest} = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export const Movie = ({movie}) => {
  const options = {
    scale: 0.9,
    speed: 1000,
    max: 30,
    glare: true,
  };

  return (
    <Tilt className="movie__box" options={options}>
      <motion.div layout className="movie__card">
        <div className="movie__img-holder">
          <img
            className="movie__img"
            src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}
            alt=""
          />
        </div>
        <div className="movie__text-holder">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};
