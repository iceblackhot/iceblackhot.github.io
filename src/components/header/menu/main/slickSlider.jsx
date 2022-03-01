import React, {Component} from 'react';
import Slider from 'react-slick';

import './slickSlider.scss';

import '../../../../../node_modules/slick-carousel/slick/slick.scss';
import '../../../../../node_modules/slick-carousel/slick/slick-theme.scss';

import slideOne from '../../../assets/slickSlides/1.jpg';
import slideTwo from '../../../assets/slickSlides/2.jpg';
import slideThree from '../../../assets/slickSlides/3.png';
import slideFour from '../../../assets/slickSlides/4.jpg';
import slideFive from '../../../assets/slickSlides/5.jpg';

export default class SlickSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      arrows: true,
      accessibility: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
          },
        },
      ],
    };
    return (
      <section className="avangers-slider">
        <div className="avangers-slider__holder">
          <div className="avangers-slider__title-holder">
            <h2>Avangers</h2>
          </div>
          <Slider {...settings}>
            <div className="avangers-slider__img-holder">
              <img className="avangers-slider__img" src={slideOne} alt="avangers img" />
            </div>
            <div className="avangers-slider__img-holder">
              <img className="avangers-slider__img" src={slideTwo} alt="avangers img" />
            </div>
            <div className="avangers-slider__img-holder">
              <img className="avangers-slider__img" src={slideThree} alt="avangers img" />
            </div>
            <div className="avangers-slider__img-holder">
              <img className="avangers-slider__img" src={slideFour} alt="avangers img" />
            </div>
            <div className="avangers-slider__img-holder">
              <img className="avangers-slider__img" src={slideFive} alt="avangers img" />
            </div>
            <div className="avangers-slider__img-holder">
              <img className="avangers-slider__img" src={slideOne} alt="avangers img" />
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
