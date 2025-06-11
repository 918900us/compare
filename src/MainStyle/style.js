import styled from "styled-components";
import Imagesone from "../assets/Image1.svg"
import Imagess from "../assets/702.svg"
import Imagesss from "../assets/703.svg"
import Imagessss from "../assets/704.svg"
import Imagestwo from "../assets/caravan1.jpg"
import Imagesthree from "../assets/tuningg.jpg"
import Imagesfour from "../assets/usedcars.jpg"
import Imagesfive from "../assets/camping.jpg"

export const Mavbardiv= styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
height: 90px;
flex-shrink: 0;
background: #FFF;
box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);


@media only screen and (max-width: 900px) {
    display: flex;
    background-color: aqua;
    
  
}
`

export const Aaaa=styled.div`
display: none;
@media only screen and (max-width: 900px) {
    display: flex;
    background-color: aqua;
margin-left:30px}

`

export const Logo= styled.div`
display: flex;
justify-content: center;
align-items: center ;
color: var(--blue, #006DAB);
font-size: 38px;
font-style: normal;
font-weight: 600;
line-height: normal;

@media only screen and (max-width: 900px) {
    display: flex;
   margin-left:-50px}

`
export const Menu= styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
margin: 40px;
width: 900px;
@media only screen and (max-width: 900px) {
    display: none;
}
`
export const Paragref= styled.p`
color: var(--text, #373737);
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
`

export const Loginbar= styled.div`
display: flex;
justify-content:center ;
align-items: center;
gap: 25px;
width: 300px;

@media only screen and (max-width: 900px) {
    display: flex;
    gap:5px;
    margin-right: -30px;}

`
export const Lng= styled.select`
color: var(--text, #373737);
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

export const Image1= styled.div`
background-image: url(${Imagesone});
background-repeat:no-repeat;
background-position: center;
background-size: cover;
width: 100%;
height: 350px;
flex-shrink: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
gap:0px;

`

export const Paragref2= styled.p`
color: #FFF;

font-size: ${(props)=> (props.$prime? "16px": "27px")};
font-weight: ${(props)=> (props. $prime?"500": "700")};
font-style: normal;
line-height: normal;
`
export const Motore= styled.h1`
color: #FFF;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

export const MainSaidbar= styled.div`
display: flex;
width: 100%;
height: 1970px;
@media only screen and (max-width: 900px) {
    display: flex;}
    height: 2000px;
`
export const Sidebar= styled.div`
display: flex;
width: 242px;
height: 1179.762px;
flex-direction: column;
justify-content: center;
align-items: first baseline;
flex-shrink: 0;
margin: 70px;
gap: 35px;
.input{width: 91px;
height: 36px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid rgba(55, 55, 55, 0.60);}

.div{width: 22px;
height: 22px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #666;
background: #FFF;}

@media only screen and (max-width: 900px) {
    display: none;}
`
export const Eych1= styled.h1`
color: #000;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%;
margin-bottom: -10px;

` 
export const Cost= styled.div`
display: flex;
flex-direction: column;
justify-content: first baseline;
margin: 15px;
`
               
                
export const Mjburlikdan= styled.div`
display: flex;
`
export const Maelys= styled.button`
background-color: ${(props)=> (props.$prime? "#FF7A00": "#006DAB")};
color:#FFF;
height: 38.968px;
flex-shrink: 0;
border-radius: 60px;
width: 115.804px;
flex-shrink: 0;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 2px;

`
            
export const Compare= styled.div`
display: flex;
gap: 3px;
margin-top:40px;`

export const Image2= styled.div`
background-image: url(${Imagess});
background-size: cover;
width: 75px;
height: 90px;
flex-shrink: 0;
border-radius: 10px;
box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.10);
`

export const Image3= styled.div`
background-image: url(${Imagesss});
width: 84px;
height: 58px;
flex-shrink: 0;
width: 76px;
height: 90px;
flex-shrink: 0;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.10);
`

export const Image4= styled.div`
background-image: url(${Imagessss});
width: 75px;
height: 46px;
flex-shrink: 0;
width: 75px;
height: 46px;
flex-shrink: 0;`

export const MiddleBar= styled.div`
display: flex;
flex-direction: column;
width: 956px;
height: 1615px;
flex-shrink: 0;

`
export const TopBar= styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 50px;
margin-right: 350px;
margin-top: 30px;
width: 1100px;
.page{
    color: var(--text, #373737);
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%;

@media only screen and (max-width: 900px) {
    display: flex;
    margin-left: 70px;

}}

@media only screen and (max-width: 900px) {
    display: flex;
    width: 674px;
height: 36px;
flex-shrink: 0;
margin: 0%;

}
`
export const Divv= styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 500px;
gap: 5px;
margin-left: 300px;
@media only screen and (max-width: 900px) {
    display: flex;
margin:-70px;}

`
export const Selectt= styled.select`
width: ${(props)=> (props.$agar? "227px": "80px")};
height: 30px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
`

export const CarsBar= styled.div`
display:grid;
grid-template-areas: "a a a a";
align-items: center;
gap:25px;
margin-top: 45px;
margin-left: -10px;
.Carss{
 width: 223px;
height: 307px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
 padding: 0px 0px 25px 30px;

.img{
    width: 202.42px;
height: 137.433px;
flex-shrink: 0;
border-radius: 20px;
background: url(<path-to-image>) lightgray 50% / cover no-repeat;
}
}

@media only screen and (max-width: 900px) {
    display: grid;
    grid-template-areas: "a a";
    align-items: center;
    margin-left: 70px;
   
}
`
export const H1ame= styled.h1`
color: var(--text, #373737);
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const Pcars= styled.p`
color: var(--text, #373737);
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const Facars= styled.p`
color: var(--blue, #006DAB);
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const Order=styled.button`
width: 94px;
height: 35px;
flex-shrink: 0;
color: #006DAB;
border-radius: 10px;
border: 1px solid var(--blue, #006DAB);
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
margin-left: 5px;
margin-right: 5px;
`
export const Foooter=styled.div`
display: flex;
align-items: first baseline;
justify-content: space-around;
color: white;
width: 100%;
height: 350px;
flex-shrink: 0;
background: var(--blue, #006DAB);

.p{ 
    color: #FFF;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
}

.footer{
    @media only screen and (max-width:900px) {

    display: none;
    
}
}

@media only screen and (max-width:900px) {

    display: flex;
    padding-top: 40px;
    
}
`
export const Llogo=styled.div`
display: none;

@media only screen and (max-width:900px) {

    display: flex;
    color: #FFF;
font-size: 35px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-left: -60px;
}
`

export const Logoo= styled.h1`
color: #FFF;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
@media only screen and (max-width:900px) {

    display: none;
    
}

`
export const Foot= styled.h1`
color: #FFF;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;


`
export const Planshet=styled.div`
display: none;

@media only screen and (max-width:900px) {

    display: flex;
    gap:8px;
    margin-left: 90px;
    
}

`

export const Multudiv=styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin-top: 30px;
 width: 276px !important;
height: 329px;
flex-shrink: 0;
`

export const Videos=styled.div`
display: grid;
grid-template-areas: "a a a a";
align-items: center;
justify-content: center;
gap:20px;
`
export const TagDiv=styled.div`
display: grid;
grid-template-areas: "a a a";
gap: 1px;
`


// caravan

export const Cravanrasm= styled.div`
background-image: url(${Imagestwo});
background-repeat:no-repeat;
background-position: center;
background-size: cover;
width: 100%;
height: 600px;
flex-shrink: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:0px;

`
export const Paragref3= styled.p`
color: green;

font-size: ${(props)=> (props.$prime? "16px": "27px")};
font-weight: ${(props)=> (props. $prime?"500": "700")};
font-style: normal;
line-height: normal;
`
export const Caravann= styled.h1`
color: orange;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

// tuning

export const Tuningrasm= styled.div`
background-image: url(${Imagesthree});
background-repeat:no-repeat;
background-position: center;
background-size: cover;
width: 100%;
height: 600px;
flex-shrink: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:0px;

`
export const Paragref4= styled.p`
color: green;

font-size: ${(props)=> (props.$prime? "16px": "27px")};
font-weight: ${(props)=> (props. $prime?"500": "700")};
font-style: normal;
line-height: normal;
`
export const Tuningg= styled.h1`
color: orange;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

export const Usedcarsrasm= styled.div`
background-image: url(${Imagesfour});
background-repeat:no-repeat;
background-position: center;
background-size: cover;
width: 100%;
height: 600px;
flex-shrink: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:0px;

`
export const Paragref5= styled.p`
color: red;

font-size: ${(props)=> (props.$prime? "16px": "27px")};
font-weight: ${(props)=> (props. $prime?"500": "700")};
font-style: normal;
line-height: normal;
`
export const SecondHand= styled.h1`
color: red;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

export const Campingrasm= styled.div`
background-image: url(${Imagesfive});
background-repeat:no-repeat;
background-position: center;
background-size: cover;
width: 100%;
height: 600px;
flex-shrink: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:0px;

`
export const Paragref6= styled.p`
color: white;

font-size: ${(props)=> (props.$prime? "16px": "27px")};
font-weight: ${(props)=> (props. $prime?"500": "700")};
font-style: normal;
line-height: normal;
`
export const Campingplace= styled.h1`
color: white;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

export const Campingdiv=styled.div`
display: grid;
grid-template-areas: "a a a";
justify-content: center;
align-items: center;
margin-top: 90px;
gap:25px;
transition: 0.3s ease;
:hover{
    cursor: pointer;
    width: 310px;
    height: 210px;
    transition: 0.3s ease;
}
`