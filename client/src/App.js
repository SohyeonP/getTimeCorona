import React, {useState, useEffect} from 'react';
import img1 from '../src/images/search.png';
import './App.css';
import logo from '../src/images/logo.png';


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

                <div class="logo">
                    <img src={logo} alt=""></img>
                    <span class="update-date">업데이트 날짜- 2020 .09.14</span>
                </div>
                <div className="App-title">{message}</div>
            </header>
            <body>

                <div class="search-bar">
                    <input placeholder="코로나 내용을 검색해 주세요"/>
                    <img src={img1} alt=""/>
                </div>
                <h3>오늘의 확진자</h3>
                <div class="content-box">

                    <div class="clearfix1">
                        <div>
                            <h4>확진자 그래프</h4>
                        </div>
                        <div class="box" id="chart1">content box1</div>
                        <div class="box">
                            <canvas></canvas>
                        </div>
                        <div class="box">
                            <canvas></canvas>
                        </div>
                    </div>


                    <div class="clearfix2">
                        <div>
                            <h4>코로나 주요 뉴스</h4>
                        </div>
                        <div class="box">News box1</div>
                        <div class="box">News box2</div>
                        <div class="box">News box3</div>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default App;
