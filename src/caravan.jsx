import React from 'react'
import { Caravann, Cravanrasm, Paragref3,  } from './MainStyle/style';
import Bars from './bars';




const Caravan = () => {
  return (
    <>

    <Cravanrasm style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",}}>
        <Paragref3>Home / Caravan</Paragref3>
        <Paragref3 $prime>Our ranges</Paragref3>
        <Caravann>Caravan</Caravann>
        </Cravanrasm>
        <Bars/>
       
    </>  
  )
}
export default Caravan;

