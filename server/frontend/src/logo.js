import React from 'react';
import anime from 'animejs';

class logo extends React.Component {
  animation() {
    anime({
      targets: '.cls-1',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: 100,
      loop: 3,
      direction: 'alternate'
    });
  }
  componentDidMount() {
    this.animation()
  }
  render() {
    return (
      <>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.15 33.66" width="150px">
          <g id="레이어_2" data-name="레이어 2">
            <g id="레이어_1-2" data-name="레이어 1">
              <path className="cls-1" fill="none" stroke="#ee7d6e" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"d="M1,17,38.87,1.09,39.08,1l.2.09,23.9,10V1.63H71v13l6.16,2.58"/>
            </g>
          </g>
        </svg>
      </div>
      <div style={{margin: '-40px 0px 0px 10px'}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330.5 87.29" width="130px">
          <g id="레이어_2" data-name="레이어 2">
            <g id="레이어_1-2" data-name="레이어 1">
              <polyline className="cls-1" strokeWidth="14px" fill="none" stroke="#ee7d6e" strokeLinecap="round" strokeLinejoin="round" points="7 13.82 47 13.82 26.5 13.82 26.5 29.82"/>
              <polyline className="cls-1" strokeWidth="11px" fill="none" stroke="#ee7d6e" strokeLinecap="round" strokeLinejoin="round" points="44.91 46.25 26.5 29.82 8 46.32"/>
              <line className="cls-1" strokeWidth="11px" fill="none" stroke="#ee7d6e" strokeLinecap="round" strokeLinejoin="round" x1="68" y1="11.32" x2="68" y2="45.32"/>
              <polyline className="cls-1" strokeWidth="10px" fill="none" stroke="#ee7d6e" strokeLinecap="round" strokeLinejoin="round" points="68.5 65.78 68.5 81.35 14.5 81.35 14.5 70.12 14.5 59.82 14.5 68.29 68.44 68.29 68.44 59.82"/>
              <polyline className="cls-1" strokeWidth="10.5px" fill="none" stroke="#ee7d6e" strokeLinecap="round" strokeLinejoin="round" points="120.18 19.5 120.18 46.07 90.18 46.07 90.18 23.84 90.18 13.54 90.18 27.01 120.12 27.01 120.12 13.54"/>
              <line className="cls-1" strokeWidth="11px" fill="none" stroke="#ee7d6e" strokeLinecap="round" strokeLinejoin="round" x1="144" y1="12.32" x2="144" y2="46.32"/>
              <line className="cls-1" strokeWidth="11px" fill="none" stroke="#ee7d6e" strokeLinecap="round" strokeLinejoin="round" x1="144" y1="30.32" x2="156" y2="30.32"/>
              <polyline className="cls-1" strokeWidth="11px" fill="none" stroke="#ee7d6e" strokeLinecap="round" strokeLinejoin="round" points="238 30.32 226 30.32 226 12.32 226 46.32"/>
              <polyline className="cls-1" strokeWidth="11px" fill="none" stroke="#ee7d6e" strokeLinecap="round" strokeLinejoin="round" points="96.1 63.31 115.18 63.31 115.18 81.27"/>
              <polyline className="cls-1" strokeWidth="11px" fill="none" stroke="#ee7d6e" strokeLinecap="round" strokeLinejoin="round" points="129.14 62.83 146.22 62.83 146.22 81.79"/>
              <polyline className="cls-1" strokeWidth="11px" fill="none" stroke="#ee7d6e" strokeLinecap="round" strokeLinejoin="round" points="188.51 13.05 188.42 19.93 169 44.32 189 19.32 205.84 44.32"/>
              <path className="cls-1" strokeWidth="10px" fill="none" stroke="#ee7d6e" strokeLinecap="round" strokeLinejoin="round" d="M201.16,61.65l-15.65,1s-11.51.65-11,9.27c0,0,.53,9.19,13,9.9h28.12s11.84-1.5,12.1-10.39c0,0,.27-8.9-12-9Z"/>
              <polyline className="cls-1" strokeWidth="11px" fill="none" stroke="#ee7d6e" strokeLinecap="round" strokeLinejoin="round" points="325 36.32 313 36.32 313 12.32 313 49.32"/>
              <polyline className="cls-1" strokeWidth="11px" fill="none" stroke="#ee7d6e" strokeLinecap="round" strokeLinejoin="round" points="273.1 5.5 273.1 12.5 254.1 12.5 293.1 12.5"/>
              <polyline className="cls-1" strokeWidth="12px" fill="none" stroke="#ee7d6e" strokeLinecap="round" strokeLinejoin="round" points="274.1 43.5 274.1 49.5 254.1 49.5 294.1 49.5"/>
              <path className="cls-1" strokeWidth="12px" fill="none" stroke="#ee7d6e" strokeLinecap="round" strokeLinejoin="round" d="M287.5,24.82c0,6.63-4.16,12-13,12s-16-5.37-16-12,6.16-11,15-11S287.5,18.19,287.5,24.82Z"/>
              <path className="cls-1" strokeWidth="10px" fill="none" stroke="#ee7d6e" strokeLinecap="round" strokeLinejoin="round" d="M288.24,65.65H272.58s-12.51-.35-12,8.27c0,0,1.53,7.19,14,7.9H302.7s11.84.5,12.11-8.39c-.08,2.66,0-7.49-12.31-7.61Z"/>
              </g>
            </g>
          </svg> 
      </div>
      </>
    );
  }
}


export default logo;