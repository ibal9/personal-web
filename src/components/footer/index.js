import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaInstagram, FaGithub, FaSpotify, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';


  return (
    <footer className={`footer-container ${isHomePage ? 'home' : 'other-page'}`}>
      <div className="footer-content"></div>
      <div className="footer-content">
        <div className="footer-social">
          <a 
            href="https://www.instagram.com/iiibal.e/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-item"
            aria-label="Instagram"
          >
            <FaInstagram />
            <span>Instagram</span>
          </a>
          <a 
            href="https://github.com/ibal9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-item"
            aria-label="GitHub"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a 
            href="https://open.spotify.com/user/313egavpkq7rd7chbtf2ybphp2ie?si=0em_r779QjSKrdEaiOIGkg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-item"
            aria-label="Spotify"
          >
            <FaSpotify />
            <span>Spotify</span>
          </a>
          <a 
            href="mailto:muhhammadiqbal0909@gmail.com"
            className="social-item"
            aria-label="Email"
          >
            <FaEnvelope />
            <span>Email</span>
          </a>
          <a 
            href="https://wa.me/6285174250996" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-item"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>
        </div>
        <div className="footer-text">
          <p>Let's connect and create something amazing together!</p>
          <p className="copyright">© {new Date().getFullYear()} Iqbal.e | Creted With React.JS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
