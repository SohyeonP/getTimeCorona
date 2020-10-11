import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';


const CoronaMaindata = {
    labels: ['10/2', '10/3', '10/4', '10/5', '10/6', '10/7', '10/8','10/9','10/10','10/11'],
    datasets: [
      {
        label: '일일확진자',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(239, 154, 154,1)',
        borderColor: 'rgba(239, 154, 154,1)',
        borderCapStyle: 'butt',
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(239, 154, 154,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(239, 154, 154,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [63, 75, 64, 73, 75, 114,69,54,72,58]
      }
    ]
    
  };

  export default class MainChart extends Component {
    render() {
      return (
        <div>
          <Line ref="chart" data={CoronaMaindata} />
        </div>
      );
    }
  
    componentDidMount() {
      const { datasets } = this.refs.chart.chartInstance.data
      console.log(datasets[0].data);
    }
  }
// var ctx = document.getElementById('chart1').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',

//     // The data for our dataset
//     data: {
//         labels: ['9/28', '9/29', '9/30', '10/1', '10/2', '10/3', '10/4','10/5','10/6','10/7'],
//         datasets: [{
//             label: '일별 확진자',
//             borderColor: 'rgb(239, 154, 154)',
//             backgroundColor:'rgba(225,225,225,0)',
//             data: [38, 113, 77, 63, 75, 64,73,75,114,69]
//         }]
//     },

//     // Configuration options go here
//     options: {}
// });