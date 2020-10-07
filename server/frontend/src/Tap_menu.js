import React from 'react';
import './css/Tap_menu.css';
import home from '../src/images/home.png';
import info from '../src/images/info.png';
import news from '../src/images/news.png';
import contact from '../src/images/contact.png';


function Tap_menu(){
  return(
    <ul className="tap-menu">
      <li title="home"><a href="#" className="home"><img src={home} alt="home" /></a></li>
      <li title="info"><a href="#" className="info"><img src={info} alt="info" /></a></li>
      <li title="news"><a href="#" className="news"><img src={news} alt="news" /></a></li>
      <li title="contact"><a href="#" className="contact"><img src={contact} alt="contact" /></a></li>
    </ul>
  )
  
}

export default Tap_menu;
