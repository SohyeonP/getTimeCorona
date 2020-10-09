import React from 'react';
import './css/Tap_menu.css';
import home from '../src/images/home.png';
import info from '../src/images/info.png';
import news from '../src/images/news.png';
import contact from '../src/images/contact.png';
import { Link } from "react-router-dom";


function Tap_menu(){
  return(
    <ul className="tap-menu">
      <li title="home"><Link to="/"><img src={home} alt="home" /></Link></li>
      <li title="info"><Link to="/info"><img src={info} alt="info" /></Link></li>
      <li title="news"><Link to="/news"><img src={news} alt="news" /></Link></li>
      <li title="contact"><Link to="/contact"><img src={contact} alt="contact" /></Link></li>
    </ul>
  )
  
}

export default Tap_menu;
