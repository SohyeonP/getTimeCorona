import React, { useState, useEffect } from 'react';
import img1 from '../src/images/search.png';
import './App.css';
import Logo from './logo';
import $ from 'jquery';
// import logo from '../src/images/logo.png';


$(document).ready(function() {
  $(".search-icon").click(function() {
    if($(".searchbar input ").hasClass("on") === true){
      $(".searchbar input").removeClass("on");
      $(".searchbar input").animate({
        width: '0px'
      })
    }else{
      $(".searchbar input").addClass("on");
      $(".searchbar input").css("display","block");
      $(".searchbar input").animate({
        width: '200px'
      })
    }
  })
})

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.text())
      .then(message => {
        setMessage(message);
      });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <div className="App-title">{message}</div>
      </header>

      {/* <div className="search-bar"><input placeholder="코로나 내용을 검색해 주세요" /><img src={img1} alt="" /></div> */}
      <div className="searchbar">
        <button type="button" className="search-icon"><img src={img1} alt="search" /></button>
        <input type="search"></input>
      </div>
      
        
        <ul className="tap-menu">
          <li title="home"><a href="#" className="home">home</a></li>
          <li title="search"><a href="#" className="search">search</a></li>
          <li title="pencil"><a href="#" className="pencil">pencil</a></li>
          <li title="about"><a href="#" className="active about">about</a></li>
          <li title="archive"><a href="#" className="archive">archive</a></li>
          <li title="contact"><a href="#" className="contact">contact</a></li>
        </ul>
        

        <div className="corona">
          <div>
            <p>1</p>
          </div>
          <div>
            <p>2</p>
          </div>
          <div>
            <p>3</p>
          </div>
        </div>
  
    
      <div className="content-box">

        <div className="clearfix1">
          <div><h4>확진자 그래프</h4></div>
          <div className="box" id="chart1"> content box1</div>
          <div className="box"> <canvas></canvas></div>
          <div className="box"> <canvas></canvas></div>
        </div>



        <div className="clearfix2">
          <div><h4>코로나 주요 뉴스</h4></div>
          <div className="box"> News box1</div>
          <div className="box"> News box2</div>
          <div className="box"> News box3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
