import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

let buttonStyle= {
    margin: "10px",
    "text-align":"center"
}
export default class ProgressiveBar extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            percentage:this.props.percentage,
            name:this.props.name,
            status: this.props.status
        }
    }

    render()
    {
        return (
            <div style={{ width: 200, height: 200 }}>
                <div style={buttonStyle}>
                <p>{this.state.name}</p>
                </div>
                 {}
                <CircularProgressbar value={this.state.percentage} text={`${this.state.status}`} />
                {/* <CircularProgressbar value={10} text={`${10}%`} />; */}
            </div>
        )
    }
}