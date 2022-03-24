import React from 'react'
import {Card}  from './styles/Home.styled'
//import { Image } from './Home.styled'


function HomeCard({item}) {
  return (
    <Card key={item.id} layout={item.id%2 === 0 && 'row-reverse'}>
                    <img src={`./images/svg/home${item.id}.svg`} />
                    <div>
                        <h1> {item.title}</h1>
                        <p>{item.body}</p>
                    </div>
    </Card>
  )
}

export default HomeCard