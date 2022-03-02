import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from '../header/header/header';
import {Comics} from '../header/menu/comics/comics';
import {Heroes} from '../header/menu/heroes/heroes';
import {Games} from '../header/menu/games/games';
import {Main} from '../header/menu/main/main';
import {Movies} from '../header/menu/movies/movies';
import {SignIn} from '../header/menu/signIn/signin';
import { NotFoundPage } from '../utils/notFoundPage';
import {Context} from '../context';
import {Footer} from '../footer/footer';


function App() {
  return (
    <>
      <Context.Provider value={{}}>
        <div className="wrapper">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/comics" element={<Comics />} />
              <Route path="/heroes" element={<Heroes />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/games" element={<Games />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
