import {useEffect} from 'react';

import './filter.scss';

function Filter({setActiveGenre, activeGenre, setFiltered, popular}) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) => movie.genre_ids.includes(activeGenre));

    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div className="filter-container">
      <button className={activeGenre === 0 ? 'active' : ''} onClick={() => setActiveGenre(0)}>
        All
        <span className="marvel-button__line marvel-button__line-top"></span>
        <span className="marvel-button__line marvel-button__line-right"></span>
        <span className="marvel-button__line marvel-button__line-bottom"></span>
        <span className="marvel-button__line marvel-button__line-left"></span>
      </button>
      <button className={activeGenre === 35 ? 'active' : ''} onClick={() => setActiveGenre(35)}>
        <span className="marvel-button__line marvel-button__line-top"></span>
        <span className="marvel-button__line marvel-button__line-right"></span>
        <span className="marvel-button__line marvel-button__line-bottom"></span>
        <span className="marvel-button__line marvel-button__line-left"></span>
        Comedy
      </button>
      <button className={activeGenre === 28 ? 'active' : ''} onClick={() => setActiveGenre(28)}>
        <span className="marvel-button__line marvel-button__line-top"></span>
        <span className="marvel-button__line marvel-button__line-right"></span>
        <span className="marvel-button__line marvel-button__line-bottom"></span>
        <span className="marvel-button__line marvel-button__line-left"></span>
        Action
      </button>
      <button className={activeGenre === 12 ? 'active' : ''} onClick={() => setActiveGenre(12)}>
        <span className="marvel-button__line marvel-button__line-top"></span>
        <span className="marvel-button__line marvel-button__line-right"></span>
        <span className="marvel-button__line marvel-button__line-bottom"></span>
        <span className="marvel-button__line marvel-button__line-left"></span>
        Adventures
      </button>
    </div>
  );
}

export default Filter;
