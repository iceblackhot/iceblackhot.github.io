import React from 'react';

import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaMapMarker,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

import './footer.scss';

export const Footer = () => {
  const telNum = ['tel:0939327661'];
  const mailTo = ['mailto:iceblackhot2@gmail.com'];
  const inst = ['https://www.instagram.com/marvelstudios/'];
  const youtube = ['https://www.youtube.com/channel/UCvC4D8onUfXzvjTOM-dBfEA'];
  const facebook = ['https://www.facebook.com/marvelstudios/'];
  const telega = ['https://tlgrm.ru/channels/@marvel4'];
  const about = ['https://www.marvel.com/corporate/about'];
  const faq = ['https://www.marvel.ru/en/partnership/faq/'];
  const contact = ['https://www.marvelhq.com/contact-us'];
  const help = ['https://help.marvelapp.com/hc/en-us'];
  const support = ['https://twitter.com/marvelsupport'];

  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__aboutus sec">
            <div className="footer__title">
              <h2>About us</h2>
              <div className="footer__separator"></div>
            </div>

            <div className="footer__text-holder">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, assumenda!
                Ducimus voluptate optio, consectetur ipsa nam, excepturi repudiandae reiciendis quam
                voluptates dignissimos natus veniam dolorem veritatis? Eum unde consequuntur quo.{' '}
              </p>
            </div>
            <ul className="footer__socials-list">
              <li className="footer__item facebook">
                <a className="footer__link" href={facebook}>
                  <i className="footer__facebook-ico ico">
                    <FaFacebook />
                  </i>
                </a>
              </li>
              <li className="footer__item twitter">
                <a className="footer__link" href={inst}>
                  <i className="footer__instagram-ico ico">
                    <FaInstagram />
                  </i>
                </a>
              </li>
              <li className="footer__item instagram">
                <a className="footer__link" href={telega}>
                  <i className="footer__telegram-ico ico">
                    <FaTelegram />
                  </i>
                </a>
              </li>
              <li className="footer__item google">
                <a className="footer__link" href={youtube}>
                  <i className="footer__youtube-ico  ico">
                    <FaYoutube />
                  </i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__quicklinks sec">
            <div className="footer__title">
              <h2>Quick links</h2>
            </div>
            <ul className="footer__quicklinks-list">
              <li className="footer__quicklinks-item">
                <a className="footer__quicklinks-link" href={about}>
                  About
                </a>
              </li>
              <li className="footer__quicklinks-item">
                <a className="footer__quicklinks-link" href={faq}>
                  FAQ
                </a>
              </li>
              <li className="footer__quicklinks-item">
                <a className="footer__quicklinks-link" href={contact}>
                  Contact
                </a>
              </li>
              <li className="footer__quicklinks-item">
                <a className="footer__quicklinks-link" href={help}>
                  Help
                </a>
              </li>
              <li className="footer__quicklinks-item">
                <a className="footer__quicklinks-link" href={support}>
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__contact sec">
            <div className="footer__title">
              <h2>Contact info</h2>
            </div>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <span>
                  <i className="footer__map-ico ">
                    <FaMapMarker />
                  </i>
                </span>
                <span>Poltava region</span>
              </li>
              <li className="footer__contact-item">
                <span>Horisni Plavni</span>
              </li>
              <li className="footer__contact-item">
                <span> Heroes of the Dnipper street</span>
              </li>
              <li className="footer__contact-item">
                <span>
                  <i className="footer__phone-ico ">
                    <FaPhone />
                  </i>
                </span>
                <p>
                  <a className="footer__tel" href={telNum}>
                    +38(093) 932 76 61
                  </a>
                </p>
              </li>
              <li className="footer__contact-item">
                <span>
                  <i className="footer__envelope-ico ">
                    <FaEnvelope />
                  </i>
                </span>
                <p>
                  <a className="footer__mail" href={mailTo}>
                    iceblackhot2@gmail
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <span>&copy; Copyright 2022 Evgeny Grishin Design</span>
      </div>
    </>
  );
};
