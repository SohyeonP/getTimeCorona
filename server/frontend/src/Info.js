import React, { useState, useEffect } from 'react';
import img1 from '../src/images/search.png';
import Tap_menu from  './Tap_menu';
import Logo from './logo';
import $ from 'jquery';
class Info extends React.Component{
    
    render(){
        return(
        <div className="Info">
          <header className="Info-header">
          <Logo />
        {/* <div className="App-title">{message}</div> */}
      </header>
      <Tap_menu />
        <p class="ta_r mgt36">* 현재까지 알려진 정보(2020년 4월 2일 기준) </p>
        <h4 class="s_title_1">코로나바이러스감염증-19(COVID-19) 정보</h4>
        
        
						
        </div>
        );
    }
}
export default Info;