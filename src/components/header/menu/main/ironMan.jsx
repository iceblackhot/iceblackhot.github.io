import React, {useRef, useEffect} from 'react';

import './ironMan.scss';

import {gsap} from 'gsap';

import ScrollTrigger from '../../../../../node_modules/gsap/ScrollTrigger.js';

import bg from '../../../assets/images/bg.jpg';
import moon from '../../../assets/images/moon.png';
import cloud1 from '../../../assets/images/cloud1.png';
import cloud2 from '../../../assets/images/cloud2.png';
import jet from '../../../assets/images/jet.png';
import stark from '../../../assets/images/ironman07.png';

export const IronMan = () => {
  const bgGsap = useRef();
  const moonGsap = useRef();
  const cloud1Gsap = useRef();
  const cloud2Gsap = useRef();
  const jetGsap = useRef();
  const starkGsap = useRef();

  //Animation BackGround
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(bgGsap.current, {
      scrollTrigger: {
        scrub: true,
      },
      y: 200,
      scale: 1.5,
    });
  });

  //Amination Moon
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(bgGsap.current, {
      scrollTrigger: {
        scrub: true,
      },
      x: -400,
      scale: 2,
    });
  });

  //Amination Cloud1
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(cloud1Gsap.current, {
      scrollTrigger: {
        scrub: true,
      },
      x: -400,
    });
  });

  //Amination Cloud2
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(cloud2Gsap.current, {
      scrollTrigger: {
        scrub: true,
      },
      x: 300,
    });
  });

  //Amination Jet
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(jetGsap.current, {
      scrollTrigger: {
        scrub: true,
      },
      x: 1500,
      y: 200,
      scale: 3,
    });
  });

  //Amination Stark
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(starkGsap.current, {
      scrollTrigger: {
        scrub: true,
      },
      x: 0,
      y: -1800,
      scale: 2.5,
      rotate: -30,
    });
  });

  return (
    <>
      <section className="ironman-fly">
        <img src={bg} ref={bgGsap} id="bg" alt="building skyline" />
        <img src={moon} ref={moonGsap} id="moon" alt="full moon" />
        <img src={cloud1} ref={cloud1Gsap} id="cloud1" alt="clouds" />
        <img src={cloud2} ref={cloud2Gsap} id="cloud2" alt="clouds" />
        <img src={jet} ref={jetGsap} id="jet" alt="flying Avengers jet" />
        <img src={stark} ref={starkGsap} id="ironman" alt="flying ironman" />
      </section>

      <div className="ironman-fly__text-holder">
        <div className="content">
          <h2>
            <span id="text">I AM IRON MAN</span>
          </h2>

          <p id="text">
            Everybody wants a happy ending, right? But it doesn't always roll that way. Maybe this
            time. I'm hoping if you play this back... it's in celebration. I hope families are
            reunited. I hope we get it back and something like a normal version of the planet has
            been restored, if there ever was such a thing.
          </p>

          <br />

          <p id="text">
            God, what a world. Universe now. If you told me ten years ago that we weren't alone, let
            alone you know to this extent... I mean, I wouldn't have been surprised. But come on,
            you know. That epic forces of darkness and light that have come into play. And for
            better or worse, that's the reality Morgan's gonna have to find a way to grow up in. So
            I thought I better record a little greeting, in the case of an untimely death, on my
            part. Not that death at any time is ever timely.
          </p>

          <br />

          <p id="text">
            This time travel thing that we're gonna try and pull off tomorrow... it's got me
            scratching my head about the survivability of all this. But then again that's the hero
            gig. Part of the journey is the end. What am I even tripping for? Everything is going to
            work out exactly the way it's supposed to.
          </p>
        </div>
      </div>
    </>
  );
};
