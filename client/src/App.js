import React, { useState, useEffect } from 'react';
import img1 from '../src/images/search.png';
import './App.css';
import Logo from './logo';
// import logo from '../src/images/logo.png';


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

      <div className="search-bar"><input placeholder="코로나 내용을 검색해 주세요" /><img src={img1} alt="" /></div>
      
      <div className="menu">
        <div>Menu</div>
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
