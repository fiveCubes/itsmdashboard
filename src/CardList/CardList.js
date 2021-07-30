import React from 'react';
import Card from '../Card/Card'
const CardList = ({data}) => 
{
    let cards = data.map((d) => <Card color={d.color} name ={d.name} value = {d.value} icon={d.icon}></Card>)
    return (
        <div>
             
            {cards}
        </div>
    )
}

export default CardList;