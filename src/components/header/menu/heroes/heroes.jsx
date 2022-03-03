import React, {useEffect, useState} from 'react';

import axios from 'axios';

import './heroes.scss';
import {Preloader} from '../../../preloader/preloader';
import {ButtonUp} from '../buttonUp/buttonUp';

export const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [line, setLine] = useState('');
  const [switchToggled, setSwitchToggled] = useState(false);

  const ToggleSwitch = () => setSwitchToggled(!switchToggled);
  const classSearchActive = `marvel-heroes__search-holder${switchToggled ? ' active' : ''}`;

  useEffect(() => {
    const fetch = async () => {
      // const result = await axios(process.env.REACT_APP_API);
      const result = await axios('https://gateway.marvel.com:443/v1/public/characters?apikey=6561ba31823b9c8d4971690f8f768319')
      setHeroes(result.data.data.results);
      // console.log(result.data.data.results);
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
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sequi esse
                  laboriosam officia autem dolor magni voluptates eveniet, excepturi dolore
                  molestias, veniam, quam quo! Temporibus odit explicabo nesciunt blanditiis itaque?
                </p>
              </div>
              <a className="marvel-button" href={per.urls[0].url}>
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
      <ButtonUp />
    </section>
  );
};
