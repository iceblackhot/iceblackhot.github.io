/** @format */

import React, {useEffect, useRef, useState} from 'react';

import {motion} from 'framer-motion';

import VanillaTilt from 'vanilla-tilt';

import './movieCard.scss';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

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

  const [openDial, setOpenDial] = useState(false);

  const movLink = 'https://www.themoviedb.org/';

  const handleClickOpen = () => {
    setOpenDial(true);
  };

  const handleClose = () => {
    setOpenDial(false);
  };

  return (
    <>
      <Dialog
        open={openDial}
        onClose={handleClose}
        PaperProps={{
          style: {
            borderRadius: '0',
          },
        }}>
        <DialogTitle
          PaperProps={{
            style: {
              fontFamily: 'marvelregular',
              fontWeight: 'bold',
            },
          }}
          id="alert-dialog-title">
          {'MORE INFO'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You can find more information about the Movies on the official Themoviedb website!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={() => window.open(movLink)}>Show More</Button>
        </DialogActions>
      </Dialog>
      <Tilt className="movie__box" options={options} onClick={handleClickOpen}>
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
    </>
  );
};
