import React, { useState, useEffect } from 'react';
import img1 from '../src/images/search.png';
import './css/Home.css';
import $ from 'jquery';
import Examchart from './ExamChart';
import banner from '../src/images/s_banner.png';
import MainChart from './MainChart';
import News from '../src/News';


$(document).ready(function () {
  $(".search-icon").click(function () {
    if ($(".searchbar input ").hasClass("on") === true) {
      $(".searchbar input").removeClass("on");
      $(".searchbar input").animate({
        width: '0px'
      })
    } else {
      $(".searchbar input").addClass("on");
      $(".searchbar input").css("display", "block");
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

  $('.tab-menu-btn').on('click', function () {
    //버튼 색 제거,추가
    $('.tab-menu-btn').removeClass('on');
    $(this).addClass('on')

    //컨텐츠 제거 후 인덱스에 맞는 컨텐츠 노출
    var idx = $('.tab-menu-btn').index(this);

    $('.tab-box').hide();
    $('.tab-box').eq(idx).show();
  });
  function NewsClick() {
    alert("현재는  준비중인 서비스 입니다.!");
  }
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
             24606<span>(+58)</span>
        </div>
        <div>
          <p>검사중</p>
            19303<span>(+321)</span>
        </div>
        <div>
          <p>격리 해제</p>
            22693<span>(+69)</span>
        </div>
        <div>
          <p>사망자</p>
            432<span>(+2)</span>
        </div>
      </div>

      <div className="banner ">
        <img src={banner} alt="우리를 위해 힘쓰신 의료진들을 응원합니다!" />
      </div>

      {/* <div>{data}</div> */}
      <div className="content-box">

        <div className="clearfix1">
          <div><h4>확진자 그래프</h4></div>
          <div className="box" id="ExamChart"><MainChart /></div>
          <div><h4>검사현황</h4></div>
          <div className="box"><Examchart /></div>
          <div><h4>지역별 대응 홈페이지 바로가기</h4></div>
          <div className="homepage">
            <ul>
              <li>
                <a href="https://www.seoul.go.kr/coronaV/coronaStatus.do">서울</a>
              </li>
              <li>
                <a href="https://www.gg.go.kr/contents/contents.do?ciIdx=1150&menuId=2909">경기</a>
              </li>
              <li>
                <a href="https://www.incheon.go.kr/health/HE020409">인천</a>
              </li>
              <li>
                <a href="http://covid19.daegu.go.kr/">대구</a>
              </li>
            </ul>
          </div>
        </div>


        <div className="clearfix2">
          <div><h4>코로나 주요 뉴스</h4></div>
          <div className="tab_wrap">
            <div className="box">{/*<button className ="tab-menu-btn on">네이버</button>*/}
              {/* <button className ="tab-menu--btn">다음</button></div> */}<News/>
              <div className="tab_box1 tab_box on"></div>
              {/* <div className = "tab_box2 tab_box">다음뉴스 박스</div> */}
            </div>
          </div>
        </div>
      </div>


    </div>

  );
}

export default Home;