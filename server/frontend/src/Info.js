import React, { useState, useEffect } from 'react';
import CoronaTable from './CoronaTable';
class Info extends React.Component{
    
    render(){
        return(
        <div className="Info">
        <p class="ta_r mgt36">* 현재까지 알려진 정보(2020년 4월 2일 기준) </p>
        <h4 class="s_title_1">코로나바이러스감염증-19(COVID-19) 정보</h4>
            <CoronaTable/>
       
        <h5 class="s_title_in3">개요</h5>
        <h4 class="s_title_1">코로나 바이러스 분류 및 특성</h4>
        <ul class="s_listin_dot">
                        	<li>코로나 바이이러스(CoV)는 사람과 다양한 동물에 감염될 수 있는 바이러스로서 유전자 크기 27~32kb의 RNA 바이러스</li>
                        </ul>
                        <h5 class="s_title_in3">분류</h5>
                        <ul class="s_listin_dot">
                        	<li>코로나 바이러스과에는 4개의 속(알파, 베타, 감마, 델타)이 있음
                            	<ul class="s_listin_bar">
                                	<li>알파 · 베타 : 사람과 동물에게 감염</li>
                                    <li>감마 · 델타 : 동물에게 감염</li>
                                </ul>
                            </li>
                        </ul>
                        <h5 class="s_title_in3">형태</h5>
                        <ul class="s_listin_dot">
                        	<li>형태는 코로나 바이러스의 명명과 같이 전자현미경 관찰시 구형
                            	<ul class="s_listin_bar">
                                    <li>외부 spike 단백질이 특징적인 크라운형태</li>
                                </ul>
                            </li>
                        </ul>
                        <h5 class="s_title_in3">사람감염 코로나 바이러스</h5>
                        <ul class="s_listin_dot">
                        	<li>사람감염 코로나 바이러스는 현재까지 6종류가 알려져 있음
                            	<ul class="s_listin_bar">
                                	<li>감기를 일으키는 유형(229E, OC43, NL63, HKU1)</li>
                                    <li>중증폐렴을 일으킬 수 있는 유형(SARS-CoV, MERS-CoV) </li>
                                </ul>
                            </li>
                        </ul>
                        
        </div>
        );
    }
}
export default Info;