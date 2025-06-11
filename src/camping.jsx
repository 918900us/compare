import React from 'react'
import { Campingdiv, Campingplace, Campingrasm, Paragref6 } from './MainStyle/style'
import Campingone from ".//assets/camping2.jpg"
import Camping2 from ".//assets/camping3.jpg"
import Camping3 from ".//assets/camping4.jpg"
import Camping4 from ".//assets/camping5.jpg"
import Camping5 from ".//assets/camping6.jpg"
import Camping6 from ".//assets/camping7.jpg"
import Camping7 from ".//assets/camping8.jpg"
import Camping8 from ".//assets/camping9.jpg"
import Camping9 from ".//assets/camping10.jpg"
import Camping10 from ".//assets/camping11.jpg"
import Camping11 from ".//assets/camping12.jpg"
import Camping12 from ".//assets/camping2.jpg"


export const Camping = () => {
  return (
     <>
    
        <Campingrasm style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",}}>
            <Paragref6>Home / Camping Places</Paragref6>
            <Paragref6 $prime>Our Sights</Paragref6>
            <Campingplace>Camping Places</Campingplace>
            </Campingrasm>
        <Campingdiv>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", borderRadius:"15px"}}>
                <img style={{borderRadius:"10px"}} width={"300px"} height={"200px"} src={Campingone} alt="image" />
                <h1 style={{fontSize:"15px"}}>Camping Place1</h1>
                <p style={{fontSize:"12px"}}>대구 중구</p>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", borderRadius:"15px"}}>
                <img style={{borderRadius:"10px"}} width={"300px"} height={"200px"} src={Camping2} alt="image" />
                <h1 style={{fontSize:"15px"}}>Camping Place1</h1>
                <p style={{fontSize:"12px"}}>대구 중구</p>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", borderRadius:"15px"}}>
                <img style={{borderRadius:"10px"}} width={"300px"} height={"200px"} src={Camping3} alt="image" />
                <h1 style={{fontSize:"15px"}}>Camping Place1</h1>
                <p style={{fontSize:"12px"}}>대구 중구</p>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", borderRadius:"15px"}}>
                <img style={{borderRadius:"10px"}} width={"300px"} height={"200px"} src={Camping4} alt="image" />
                <h1 style={{fontSize:"15px"}}>Camping Place1</h1>
                <p style={{fontSize:"12px"}}>대구 중구</p>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", borderRadius:"15px"}}>
                <img style={{borderRadius:"10px"}} width={"300px"} height={"200px"} src={Camping5} alt="image" />
                <h1 style={{fontSize:"15px"}}>Camping Place1</h1>
                <p style={{fontSize:"12px"}}>대구 중구</p>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", borderRadius:"15px"}}>
                <img style={{borderRadius:"10px"}} width={"300px"} height={"200px"} src={Camping6} alt="image" />
                <h1 style={{fontSize:"15px"}}>Camping Place1</h1>
                <p style={{fontSize:"12px"}}>대구 중구</p>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", borderRadius:"15px"}}>
                <img style={{borderRadius:"10px"}} width={"300px"} height={"200px"} src={Camping7} alt="image" />
                <h1 style={{fontSize:"15px"}}>Camping Place1</h1>
                <p style={{fontSize:"12px"}}>대구 중구</p>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", borderRadius:"15px"}}>
                <img style={{borderRadius:"10px"}} width={"300px"} height={"200px"} src={Camping8} alt="image" />
                <h1 style={{fontSize:"15px"}}>Camping Place1</h1>
                <p style={{fontSize:"12px"}}>대구 중구</p>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", borderRadius:"15px"}}>
                <img style={{borderRadius:"10px"}} width={"300px"} height={"200px"} src={Camping9} alt="image" />
                <h1 style={{fontSize:"15px"}}>Camping Place1</h1>
                <p style={{fontSize:"12px"}}>대구 중구</p>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", borderRadius:"15px"}}>
                <img style={{borderRadius:"10px"}} width={"300px"} height={"200px"} src={Camping10} alt="image" />
                <h1 style={{fontSize:"15px"}}>Camping Place1</h1>
                <p style={{fontSize:"12px"}}>대구 중구</p>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", borderRadius:"15px"}}>
                <img style={{borderRadius:"10px"}} width={"300px"} height={"200px"} src={Camping11} alt="image" />
                <h1 style={{fontSize:"15px"}}>Camping Place1</h1>
                <p style={{fontSize:"12px"}}>대구 중구</p>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", borderRadius:"15px"}}>
                <img style={{borderRadius:"10px"}} width={"300px"} height={"200px"} src={Camping12} alt="image" />
                <h1 style={{fontSize:"15px"}}>Camping Place1</h1>
                <p style={{fontSize:"12px"}}>대구 중구</p>
            </div>
           
        </Campingdiv>
        
           
        </>  
  )
}
