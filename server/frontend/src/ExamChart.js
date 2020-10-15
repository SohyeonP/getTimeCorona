import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

const ExamChartdata={
    labels: ['검사중', '양성', '음성',],
    datasets: [{
        label: '검사결과',
        data: [18262 , 24988,2407489],
        borderColor: [
            'rgba(239, 154, 154,1)',
            'rgba(179, 229, 252,1)',
            'rgba(181, 176, 176, 1)'
          ],
          backgroundColor:[
            'rgba(239, 154, 154,1)',
            'rgba(179, 229, 252,1)',
            'rgba(181, 176, 176, 1)'
        ],
          borderWidth: 2,
          options: {
            cutoutPercentage: 40,
     
       }
    }]
}


export default class ExamChart extends Component{
  render() {
      return (
        <div>
          <Doughnut ref="chart" data={ExamChartdata} />
        </div>
      );
    }
    componentDidMount() {
        const { datasets } = this.refs.chart.chartInstance.data
        console.log(datasets[0].data);
      }
}