import React from 'react';



let bg='green'
const Card = (props) => 
{
    // let icon = './onb.png'
    // console.log(icon)
    // const onb = require('./onb.png')
    return (
        <div className={`bg-light-white  dib ba b--${props.color} w-20 br3 pa3 ma3 grow bw1 shadow-5`}>
            {/* {props.icon} */}
            <img alt ='icon' src={`${props.icon}`} style={{width:"50px"}}/>
            <div>
                <h1>{props.value}</h1>
                <p className='light gray'>{props.name}</p>
            </div>
        </div>
    )
}

export default Card;