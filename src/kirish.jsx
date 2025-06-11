

import MultipleItems from "./moultyCouresel";
import { PopTagi } from "./popTagi";
import Popup from "./popup";
import SimpleSlider from "./SimpleSlider";





const Kirish = () => {
  return (
    <>
 
    <SimpleSlider/>
    <h1 style={{display:"flex", alignItems:"center", justifyContent:"center", color: " #373737", fontSize: "28px", 
           fontStyle: "normal",
           font: "700",
           lineHeight: "normal",
           marginTop:"30px"

    }}>Recomended</h1>
    <MultipleItems/>
    <Popup/>
    <PopTagi/>
    </>
  )
}
export default Kirish;