import React, { useState, useEffect } from 'react';
import img1 from '../src/images/search.png';

import Logo from './logo';
import $ from 'jquery';
import home from '../src/images/home.png';
import info from '../src/images/info.png';
import news from '../src/images/news.png';
import contact from '../src/images/contact.png';
class Info extends React.Component{
    
    render(){
        return(
        <div className="Info">
                 <header className="Info-header">
        <Logo />
        {/* <div className="App-title">{message}</div> */}
      </header>
        <ul className="tap-menu">
          <li title="home"><a href="#" className="home"><img src={home} alt="home" /></a></li>
          <li title="info"><a href="#" className="info"><img src={info} alt="info" /></a></li>
          <li title="news"><a href="#" className="news"><img src={news} alt="news" /></a></li>
          <li title="contact"><a href="#" className="contact"><img src={contact} alt="contact" /></a></li>
        </ul>
        <p class="ta_r mgt36">* 현재까지 알려진 정보(2020년 4월 2일 기준) </p>
        <h4 class="s_title_1">코로나바이러스감염증-19(COVID-19) 정보</h4>
        
        
						
        </div>
        );
    }
}
export default Info;