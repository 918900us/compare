import React from "react";
import Slider from "react-slick";
import Multirasm from "./assets/multirasm1.svg"
import Multirasm2 from "./assets/image4.svg"
import Multirasm3 from "./assets/image3.svg"
import Multirasm4 from "./assets/image2.svg"
import { Multudiv } from "./MainStyle/style";
import Halati from "./assets/halati.svg"


function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <Multudiv>
          <img src={Multirasm} alt="image" />
          <h3 style={{
            color: "var(--text, #373737);",
            textAlign: "center",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}>Knaus</h3>
          <div style={{ display:"flex"}}>    
          <img src={Halati} alt="image" />
          <p style={{marginLeft:"-200px", color:"white"}}>Discover the range</p>
          </div>      
          <p style={{
                color:" var(--text, #373737)",
                 fontSize: "16px",
                 fontStyle: "normal",
                 fontWeight: "500",
                 lineHeight: "normal",
                 width:"150px",
                 marginLeft:"70px"
            }}>Choose a model</p>    
        </Multudiv>

        <Multudiv>
          <img style={{width: "290px",
                      height: "167px",}} src={Multirasm2} alt="image" />
          <h3 style={{
            color: "var(--text, #373737);",
            textAlign: "center",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}>Knaus</h3>
          <div style={{ display:"flex"}}>    
          <img src={Halati} alt="image" />
          <p style={{marginLeft:"-200px", color:"white"}}>Discover the range</p>
          </div>      
          <p style={{
                color:" var(--text, #373737)",
                 fontSize: "16px",
                 fontStyle: "normal",
                 fontWeight: "500",
                 lineHeight: "normal",
                 width:"150px",
                 marginLeft:"70px"
            }}>Choose a model</p>    
        </Multudiv>
         <Multudiv>
          <img style={{width: "290px",
                      height: "167px",}} src={Multirasm3} alt="image" />
          <h3 style={{
            color: "var(--text, #373737);",
            textAlign: "center",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}>Knaus</h3>
          <div style={{ display:"flex"}}>    
          <img src={Halati} alt="image" />
          <p style={{marginLeft:"-200px", color:"white"}}>Discover the range</p>
          </div>      
          <p style={{
                color:" var(--text, #373737)",
                 fontSize: "16px",
                 fontStyle: "normal",
                 fontWeight: "500",
                 lineHeight: "normal",
                 width:"150px",
                 marginLeft:"70px"
            }}>Choose a model</p>    
        </Multudiv>
        <Multudiv>
          <img  style={{width: "290px",
                      height: "167px",}} src={Multirasm4} alt="image" />
          <h3 style={{
            color: "var(--text, #373737);",
            textAlign: "center",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}>Knaus</h3>
          <div style={{ display:"flex"}}>    
          <img src={Halati} alt="image" />
          <p style={{marginLeft:"-200px", color:"white"}}>Discover the range</p>
          </div>      
          <p style={{
                color:" var(--text, #373737)",
                 fontSize: "16px",
                 fontStyle: "normal",
                 fontWeight: "500",
                 lineHeight: "normal",
                 width:"150px",
                 marginLeft:"70px"
            }}>Choose a model</p>    
        </Multudiv>
        <Multudiv>
          <img src={Multirasm} alt="image" />
          <h3 style={{
            color: "var(--text, #373737);",
            textAlign: "center",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}>Knaus</h3>
          <div style={{ display:"flex"}}>    
          <img src={Halati} alt="image" />
          <p style={{marginLeft:"-200px", color:"white"}}>Discover the range</p>
          </div>      
          <p style={{
                color:" var(--text, #373737)",
                 fontSize: "16px",
                 fontStyle: "normal",
                 fontWeight: "500",
                 lineHeight: "normal",
                 width:"150px",
                 marginLeft:"70px"
            }}>Choose a model</p>    
        </Multudiv>
         <Multudiv>
          <img src={Multirasm} alt="image" />
          <h3 style={{
            color: "var(--text, #373737);",
            textAlign: "center",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}>Knaus</h3>
          <div style={{ display:"flex"}}>    
          <img src={Halati} alt="image" />
          <p style={{marginLeft:"-200px", color:"white"}}>Discover the range</p>
          </div>      
          <p style={{
                color:" var(--text, #373737)",
                 fontSize: "16px",
                 fontStyle: "normal",
                 fontWeight: "500",
                 lineHeight: "normal",
                 width:"150px",
                 marginLeft:"70px"
            }}>Choose a model</p>    
        </Multudiv>
        <Multudiv>
          <img src={Multirasm} alt="image" />
          <h3 style={{
            color: "var(--text, #373737);",
            textAlign: "center",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}>Knaus</h3>
          <div style={{ display:"flex"}}>    
          <img src={Halati} alt="image" />
          <p style={{marginLeft:"-200px", color:"white"}}>Discover the range</p>
          </div>      
          <p style={{
                color:" var(--text, #373737)",
                 fontSize: "16px",
                 fontStyle: "normal",
                 fontWeight: "500",
                 lineHeight: "normal",
                 width:"150px",
                 marginLeft:"70px"
            }}>Choose a model</p>    
        </Multudiv>
        <Multudiv>
          <img src={Multirasm} alt="image" />
          <h3 style={{
            color: "var(--text, #373737);",
            textAlign: "center",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}>Knaus</h3>
          <div style={{ display:"flex"}}>    
          <img src={Halati} alt="image" />
          <p style={{marginLeft:"-200px", color:"white"}}>Discover the range</p>
          </div>      
          <p style={{
                color:" var(--text, #373737)",
                 fontSize: "16px",
                 fontStyle: "normal",
                 fontWeight: "500",
                 lineHeight: "normal",
                 width:"150px",
                 marginLeft:"70px"
            }}>Choose a model</p>    
        </Multudiv>
       
      </Slider>
  
    </div>
    
  );
}

export default MultipleItems;
