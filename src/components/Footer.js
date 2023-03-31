import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="top-bar-container">
        <div className="top-bar">
          <Link className='top-bar-link' to='' >Redeem Code</Link>
          <Link className='top-bar-link' to='' >Contact Us</Link>
          <Link className='top-bar-link' to='' >Career Opportunities</Link>
          <Link className='top-bar-link' to='' >Submit your game</Link>
          <Link className='top-bar-link' to='' >Blog</Link>
        </div>
        <div className="socials">
          <Link className="social"><i class="fab fa-facebook-f"></i></Link>
          <Link className="social"><i class="fab fa-twitter"></i></Link>
          <Link className="social"><i class="fab fa-twitch"></i></Link>
        </div>
      </div>
      <div className="mid-bar-container">
        <div className="mid-bar-logo-container">
          <img src={require("../assets/images/gameplace-logo.png")} alt="Gameplace Logo" className="mid-bar-logo" />
        </div>
        <div className="mid-bar-links-container">
          <div className="language-wrapper">
            <p className="language-header">Language:</p>
            <Link className="language active">English</Link>
            <Link className="language">Deutsch</Link>
            <Link className="language">Français</Link>
            <Link className="language">Polski</Link>
            <Link className="language">Pусский</Link>
            <Link className="language">中文(简体)</Link>
          </div>
          <div className="currency-container">
            <p className="currency-header">Currency:</p>
            <Link className="currency active">USD</Link>
          </div>
        </div>
      </div>
      <div className="bottom-bar-container">
        <div className="bottom-bar-links-container">
          <Link className="bottom-bar-link">Legal</Link>
          <Link className="bottom-bar-link">Privacy Policy</Link>
          <Link className="bottom-bar-link">Our Thanks</Link>
          <Link className="bottom-bar-link">Cookie Declaration</Link>
          <Link className="bottom-bar-link">Imprint</Link>
        </div>
        <div className="copyrights">© Gameplace 2023. All rights reserved. All trademarks and registered trademarks are the property of their respective owners.</div>
      </div>
    </div>
  )
}

export default Footer