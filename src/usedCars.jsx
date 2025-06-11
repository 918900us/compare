import React from 'react'
import { Paragref5, SecondHand, Usedcarsrasm } from './MainStyle/style'
import Bars from './bars'

export const UsedCars = () => {
  return (
       <>
    
        <Usedcarsrasm style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",}}>
            <Paragref5>Home / Caravan</Paragref5>
            <Paragref5 $prime>Our ranges</Paragref5>
            <SecondHand>Caravan</SecondHand>
            </Usedcarsrasm>
            <Bars/>
           
        </>  
  )
}
