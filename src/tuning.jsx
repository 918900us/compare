import React from 'react'
import Bars from './bars'
import { Caravann, Paragref3, Paragref4, Tuningg, Tuningrasm } from './MainStyle/style'

export const Tuning = () => {
  return (
     <>

    <Tuningrasm style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",}}>
        <Paragref4>Home / Caravan</Paragref4>
        <Paragref4 $prime>Our ranges</Paragref4>
        <Tuningg>Caravan</Tuningg>
        </Tuningrasm>
        <Bars/>
       
    </> 
  )
}
