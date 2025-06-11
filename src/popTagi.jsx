import React from 'react'
import Tagrasm1 from "./assets/video1.svg";
import Tagrasm2 from "./assets/video2.svg";
import Tagrasm3 from "./assets/video3.svg";
import Tagrasm4 from "./assets/video4.svg";
import Tagrasm5 from "./assets/video5.svg";
import Tagrasm6 from "./assets/video6.svg";
import { TagDiv } from './MainStyle/style';

export const PopTagi = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"60px",}}>
        <div style={{
                    color: "#373737",
                     fontSize: "28px",
                     fontStyle: "normal",
                     fontWeight: "700",
                     lineHeight: "normal",
                     marginBottom:"30px",
                }}>Blogs</div>
        <div style={{display:"flex", justifyContent:"center", }}>
            <div>
                <h1 style={{
                    color: "#000",
                     fontSize: "28px",
                     fontStyle: "normal",
                     fontWeight: "600",
                     lineHeight: "normal",
                }}>Lorem ipsum</h1>
                <p style={{
                    color: " #FF7A00",
                     fontSize: "18px",
                     fontStyle: "normal",
                     fontWeight: "400",
                     lineHeight: "normal",
                }}>@Lorem ipsum</p>
                <p  
                       style={{
                        width: "380px",
                        height: "107px",

                    color: " #000",
                     fontSize: "16px",
                     fontStyle: "normal",
                     fontWeight: "400",
                     lineHeight: "normal",}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat platea mauris at turpis. Volutpat, morbi sit vitae id. Aliquam eleifend aenean neque in in a quam vivamus</p>
            </div>
            <TagDiv>
                <img src={Tagrasm1} alt="image" />
                <img src={Tagrasm2} alt="image" />
                <img src={Tagrasm3} alt="image" />
                <img src={Tagrasm4} alt="image" />
                <img src={Tagrasm5} alt="image" />
                <img src={Tagrasm6} alt="image" />
            </TagDiv>
        </div>
    </div>
  )
}
