import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';


export default class PieChart extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            labels: ['Total', 'Completed', 'In-Progress','Pending', 'Failed'],
          datasets: [
            {
              label: 'Today\'s Tickets',
              backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
              ],
              hoverBackgroundColor: [
              '#501800',
              '#4B5000',
              '#175000',
              '#003350',
              '#35014F'
              ],
              data: this.props.todaytkt
            }
          ]
        }
    }
  render() {
    return (
      <div style={{display:"flex"}}>
        {/* <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Current Ticket Stats',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        /> */}

        <Doughnut
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
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