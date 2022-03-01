import React, {useState, useEffect} from 'react';
import {Preloader} from '../../../preloader/preloader';
import {Avangers} from './avangers/avangers';
import {IronMan} from './ironMan';

import SlickSlider from './slickSlider';

export const Main = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader loading={loading} />
      ) : (
        <>
          <SlickSlider />
          <IronMan />
          <Avangers />
        </>
      )}
    </>
  );
};
