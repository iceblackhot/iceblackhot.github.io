/** @format */

import React, {useEffect, useState} from 'react';

import axios from 'axios';

import './heroes.scss';

import {Preloader} from '../../../preloader/preloader';

import {ButtonUp} from '../buttonUp/buttonUp';

import {API_KEY, API_URL, URL_HEROES} from '../../../utils/constants/api';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

export const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [line, setLine] = useState('');
  const [switchToggled, setSwitchToggled] = useState(false);

  const [openDial, setOpenDial] = useState(false);

  const handleClickOpen = () => {
    setOpenDial(true);
  };

  const handleClose = () => {
    setOpenDial(false);
  };

  const ToggleSwitch = () => setSwitchToggled(!switchToggled);
  const classSearchActive = `marvel-heroes__search-holder${switchToggled ? ' active' : ''}`;

  const marvLink = 'https://www.marvel.com/characters';

  useEffect(() => {
    const fetch = async () => {
      // const result = await axios(process.env.REACT_APP_API);
      const result = await axios(API_URL + URL_HEROES + API_KEY).catch((error) =>
        console.log(error.message),
      );
      setHeroes(result.data.data.results);
      console.log(result.data.data.results);
    };
    fetch();
  }, []);

  if (!heroes.length) return <Preloader />;

  const filtredNames = heroes.filter((hero) => {
    return hero.name.toLowerCase().includes(line.toLowerCase());
  });

  return (
    <section className="marvel-heroes">
      <div className="marvel-heroes__container">
        <div className={classSearchActive}>
          <input
            placeholder="Search Hero..."
            className="marvel-heroes__search"
            type="search"
            value={line}
            onChange={(e) => setLine(e.target.value)}
          />
          <div className="marvel-heroes__icon" onClick={ToggleSwitch}></div>
        </div>
        <div className="marvel-heroes__title-holder">
          <h1 className="marvel-heroes__title">Marvel Heroes</h1>
        </div>
        <div className="marvel-heroes__grid-wrapper">
          {filtredNames.map((per) => (
            <article className="marvel-heroes__card " key={per.id}>
              <div className="marvel-heroes__img-holder">
                <img
                  src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                  className="marvel-heroes__img"
                  alt="Hero logo"
                />
              </div>
              <div className="marvel-heroes__text-holder">
                <h2>{per.name}</h2>
                <p>{per.description}</p>
              </div>
              <a className="marvel-button" onClick={handleClickOpen}>
                <span className="marvel-button__line marvel-button__line-top"></span>
                <span className="marvel-button__line marvel-button__line-right"></span>
                <span className="marvel-button__line marvel-button__line-bottom"></span>
                <span className="marvel-button__line marvel-button__line-left"></span>
                info
              </a>
            </article>
          ))}
        </div>
      </div>
      <Dialog
        open={openDial}
        onClose={handleClose}
        PaperProps={{
          style: {
            borderRadius: '0',
          },
        }}>
        <DialogTitle id="alert-dialog-title">{'MORE INFO'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You can find more information about the heroes on the official Marvel website!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={() => window.open(marvLink)}>Show More</Button>
        </DialogActions>
      </Dialog>
      <ButtonUp />
    </section>
  );
};
