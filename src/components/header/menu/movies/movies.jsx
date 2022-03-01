import React, {useEffect, useState} from 'react';

import {Movie} from './movieCard';

import Filter from './filter';

import './movies.scss';

import {motion} from 'framer-motion';

import {Preloader} from '../../../preloader/preloader';
import {ButtonUp} from '../buttonUp/buttonUp';

export const Movies = ({movie}) => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    const fetchPopular = async () => {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=3f1fcf681379c251b20684e64bad92df&language=en-US&page=3',
      );

      const movies = await data.json();
      setPopular(movies.results);
      // console.log(movies.results);
      setFiltered(movies.results);
    };
    fetchPopular();
  }, []);

  if (!popular.length) return <Preloader />;

  return (
    <section className="movies">
      <div className="movies__title">
        <h1>Movies</h1>
      </div>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="movies__popular">
        {filtered.map((movie) => {
          return <Movie movie={movie} key={movie.id} />;
        })}
      </motion.div>
      <ButtonUp />
    </section>
  );
};
