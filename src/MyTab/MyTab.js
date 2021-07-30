import React from 'react';
import { Button } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import CardList from '../CardList/CardList'
import LineChart from '../LineChart/LineChart'
import {onboarding,Termination,NetworkUnlock,applications} from '../data'
import PieChart from '../PieChart/PieChart'
import ProgressiveBar from '../ProgressiveBar/ProgressiveBar';
import MicroService from '../MicroService/MicroService';

let divStyle = {
  display:"flex",
  "justify-content":"flex start",
  width:"100%",
  "padding-left":"5%"
};
let progressStyle = {
  display:"flex",
  "justify-content": 'space-evenly',
  // border:"solid black",
  height:"10%"
};
export default class MyTab extends React.Component 
{
  constructor(props){
    super(props)
    this.state = {}
  }

 componentDidMount()
 {
   console.log('rendering the tab component')
   fetch('http://localhost:4000/')
   .then(response => response.json())
   .then(data=> console.log(data))
 }
  
render(){

return (
<Tabs defaultActiveKey="Onboarding" id="uncontrolled-tab-example" className="mb-3" variant='tabs'>
  <Tab eventKey="Onboarding" title="Onboarding">
  <CardList data={onboarding}></CardList>
  <div style={divStyle}>
  <div style={{width:"50%"}}> <LineChart tkt={[2,6,1,7,10,8,3]}></LineChart></div>
  <div style={{width:"25%"}}> <PieChart todaytkt={[10,3,1,7,0]}></PieChart></div>
  </div>
  </Tab>
  <Tab eventKey="Termination" title="Termination">
  <CardList data={Termination}></CardList>
  <div style={divStyle}>
  <div style={{width:"50%"}}> <LineChart tkt={[8,20,13,17,10,5,20]}></LineChart></div>
  <div style={{width:"25%"}}> <PieChart todaytkt={[50,20,2,30,3]}></PieChart></div>
  </div>
  </Tab>
  <Tab eventKey="NetworkUnlock" title="Network Unlock">
  <CardList data={NetworkUnlock}></CardList>
  <div style={divStyle}>
  <div style={{width:"50%"}}> <LineChart tkt={[0,0,0,1,2,0,0]}></LineChart></div>
  <div style={{width:"25%"}}> <PieChart todaytkt={[1,1,0,0,0]}></PieChart></div>
  </div>
  </Tab>
  <Tab eventKey="Applications" title="Applications">
  <CardList data={applications}></CardList>
  
  </Tab>
  <Tab eventKey="Currently Running" title="Currently Running">
  <div style={progressStyle}>
  <ProgressiveBar status={'50%'} percentage={'50'} name='Dispatcher'></ProgressiveBar>
  <ProgressiveBar status={'Inactive'} percentage={'0'} name='Performer-1'></ProgressiveBar>
  <ProgressiveBar status={'75%'} percentage={'75'} name='Performer-2'></ProgressiveBar>
  </div>
  <MicroService></MicroService>
  </Tab>
</Tabs>
)
}
}
