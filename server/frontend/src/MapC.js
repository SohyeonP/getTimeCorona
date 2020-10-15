import React from 'react';
import { MapChart } from '@toast-ui/react-chart';
import 'tui-chart/dist/maps/south-korea';

const data = {
    series: [
        {
            // 서울
            code: 'KR-SU',
            data: 5607
        },
        {
            // 부산
            code: 'KR-BS',
            data: 491
        },
        {
            // 대구
            code: 'KR-DG',
            data: 7141
        },
        {
            // 인천
            code: 'KR-IC',
            data: 976
        },
        {
            // 광주
            code: 'KR-GJ',
            data: 499
        },
        {
            // 대전
            code: 'KR-DJ',
            data: 412
        }, 
        {
            // 울산
            code: 'KR-US',
            data: 156
        },
        {
            // 경기
            code: 'KR-GG',
            data: 4744
        },
        {
            // 강원
            code: 'KR-GW',
            data: 231
        },
        {
            // 충청북도
            code: 'KR-NC',
            data: 179
        },
        {
            // 충청남도
            code: 'KR-SC',
            data: 500
        },
        {
            // 전라북도
            code: 'KR-NJ',
            data: 152
        },
        {
            // 전라남도
            code: 'KR-SJ',
            data: 176
        },
        {
            // 경상남도
            code: 'KR-SG',
            data: 297
        },
        {
            // 경상북도
            code: 'KR-NG',
            data: 1570
            
        },
        {
            // 제주도
            code: 'KR-JJ',
            data: 59
        },
        {
            // 세종시
            code: 'KR-SE',
            data: 78
        }
    ]
}

const options = {
    chart: {
        width: 525,
        height: 700,
    },
    map: 'south-korea',
    legend: {
        align:'left'
    },
    tooltip: {
        suffix:'명'
    }
}
const Map = () => (
        <MapChart
            data={data}
            options={options}
        />
);
export default Map;