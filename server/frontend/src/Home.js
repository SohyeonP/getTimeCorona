import React, { useState, useEffect } from 'react';
import img1 from '../src/images/search.png';
import './css/Home.css';

import $ from 'jquery';

import banner from '../src/images/s_banner.png';

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

function Home() {
  const [data, setMessage] = useState("");
  useEffect(() => {
    fetch('/api/main')
      .then(response => response.text())
      .then(data => {
        setMessage(data);
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
      {/* <div className="search-bar"><input placeholder="코로나 내용을 검색해 주세요" /><img src={img1} alt="" /></div> */}
      <div className="searchbar">
        <button type="button" className="search-icon"><img src={img1} alt="search" /></button>
        <input type="search" placeholder="뉴스를 검색하세요."></input>
      </div>
      
        
        
        
        
        <div className="corona">
          <div>
            <p>오늘 확진자수</p>
             24422<span>(+69)</span>
          </div>
          <div>
            <p>검사중</p>
            20,978<span>(+1160)</span>
          </div>
          <div>
            <p>격리 해제</p>
            22463<span>(+129)</span>
          </div>
          <div>
          <p>사망자</p>
            427<span>(+2)</span>
          </div>
        </div>
       
        <div className ="banner ">
          <img src={banner} alt="우리를 위해 힘쓰신 의료진들을 응원합니다!"/>
        </div>
        
    {/* <div>{data}</div> */}
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
          {/* <button className ="tab-menu--btn">다음</button></div> */}
          <div className = "tab_box1 tab_box on">네이버뉴스 박스</div>
          {/* <div className = "tab_box2 tab_box">다음뉴스 박스</div> */}
          </div>
          </div>
        </div>
      </div>

     
    </div>
    
  );
}

export default Home;
