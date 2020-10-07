import React, { useState, useEffect } from 'react';
import img1 from '../src/images/search.png';
import './css/App.css';
import Logo from './logo';
import $ from 'jquery';
import home from '../src/images/home.png';
import info from '../src/images/info.png';
import news from '../src/images/news.png';
import contact from '../src/images/contact.png';
import banner from '../src/images/banner.png';
// import Info from '../src/Info';
// import New from '../src/News';
// import Mail from '../src/Mail';
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
        width: '300px'
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

  $('.tab-menu-btn').on('click',function(){
    //버튼 색 제거,추가
    $('.tab-menu-btn').removeClass('on');
    $(this).addClass('on')
    
    //컨텐츠 제거 후 인덱스에 맞는 컨텐츠 노출
    var idx = $('.tab-menu-btn').index(this);
    
    $('.tab-box').hide();
    $('.tab-box').eq(idx).show();
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        {/* <div className="App-title">{message}</div> */}
      </header>

      {/* <div className="search-bar"><input placeholder="코로나 내용을 검색해 주세요" /><img src={img1} alt="" /></div> */}
      <div className="searchbar">
        <button type="button" className="search-icon"><img src={img1} alt="search" /></button>
        <input type="search" placeholder="뉴스를 검색하세요."></input>
      </div>
      
        
        <ul className="tap-menu">
          <li title="home"><a href="#" className="home"><img src={home} alt="home" /></a></li>
          <li title="info"><a href="#" className="info"><img src={info} alt="info" /></a></li>
          <li title="news"><a href="#" className="news"><img src={news} alt="news" /></a></li>
          <li title="contact"><a href="#" className="contact"><img src={contact} alt="contact" /></a></li>
        </ul>
        
        <div className ="banner ">
          <img src={banner} alt="우리를 위해 힘쓰신 의료진들을 응원합니다!"/>
        </div>
        <div className="corona">
          <div>
            <p>오늘 확진자수</p>
            23,341 <span>(+125)</span>
          </div>
          <div>
            <p>검사중</p>
            20,782<span>(+225)</span>
          </div>
          <div>
            <p>격리 해제</p>
            20,832<span>(+182)</span>
          </div>
          <div>
          <p>사망자</p>
            395<span>(+2)</span>
          </div>
        </div>
       
<<<<<<< HEAD
        <div className ="banner ">
          <img src={banner} alt="우리를 위해 힘쓰신 의료진들을 응원합니다!"/>
        </div>
=======
        
>>>>>>> master
    
      <div className="content-box">

        <div className="clearfix1">
          <div><h4>확진자 그래프</h4></div>
          <div className="box" ><canvas id="chart1" width="50px" height="20px">
        </canvas></div>
          <div className="box"> <canvas></canvas></div>
          <div className="box"> <canvas></canvas></div>
        </div>


        <div className="clearfix2">
          <div><h4>코로나 주요 뉴스</h4></div>
          <div className="tab_wrap">
          <div className="box"> <button className ="tab-menu-btn on">네이버</button>
          <button className ="tab-menu--btn">다음</button></div>
          <div className = "tab_box1 tab_box on">네이버뉴스 박스</div>
          <div className = "tab_box2 tab_box">다음뉴스 박스</div>
          </div>
        </div>
      </div>

     
    </div>
    
  );
}

export default App;
