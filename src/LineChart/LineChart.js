import React from 'react';
import {Line} from 'react-chartjs-2';

const state = {
  labels: ['Monday', 'Tuesday', 'Wednesday',
           'Thursday', 'Friday','Saturday','Sunday'],
  datasets: [
    {
      label: 'Weekly Tickets',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [10, 20, 8, 50, 3,9,10]
    }
  ]
}

export default class LineChart extends React.Component {
    constructor(props){
        super(props)
        console.log('printing props')
        console.log(this.props.tkt)
        this.state = {
            labels: ['Monday', 'Tuesday', 'Wednesday',
                     'Thursday', 'Friday','Saturday','Sunday'],
            datasets: [
              {
                label: 'Weekly Tickets',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: this.props.tkt
              }
            ]
          }
    }
    
  render() {
    console.log(this.props)
    return (
      <div>
        <Line
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Tickets per day',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}
