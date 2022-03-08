/** @format */

import React, {useEffect, useState} from 'react';

import {Movie} from './movieCard';

import Filter from './filter';

import './movies.scss';

import {motion} from 'framer-motion';

import {Preloader} from '../../../preloader/preloader';
import {ButtonUp} from '../buttonUp/buttonUp';

import {Container, Pagination, TextField, Stack, Link} from '@mui/material';

export const Movies = ({movie}) => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(20);

  useEffect(() => {
    const fetchPopular = async () => {
      const BASE_URL =
        'https://api.themoviedb.org/3/movie/popular?api_key=3f1fcf681379c251b20684e64bad92df&language=en-US&page=';
      const data = await fetch(BASE_URL + `${page}`);

      const movies = await data.json();
      setPopular(movies.results);
      console.log(movies.results);
      setFiltered(movies.results);
    };
    fetchPopular();
  }, [page]);

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
      <Container sx={{padding: '15px'}}>
        <Link />
        <TextField fullWidth value={page} onChange={(event) => setPage(event.target.value)} />
      </Container>
      <Stack spacing={2}>
        {!!page && (
          <Pagination
            sx={{padding: '15px 15px 30px', marginX: 'auto'}}
            count={totalPage}
            page={page}
            onChange={(_, num) => setPage(num)}
            showFirstButton
            showLastButton
          />
        )}
      </Stack>
    </section>
  );
};
