import React from 'react'
import { CarsBar, Compare, Cost, Divv, Eych1, Facars, H1ame, Image2, Image3, Image4, Maelys, MainSaidbar, MiddleBar, Mjburlikdan, Order, Pcars, Selectt, Sidebar, TopBar } from './MainStyle/style';
import imag from "./assets/image2.svg"
import imag2 from "./assets/image2.2.svg"
import imag3 from "./assets/image3.svg"
import imag4 from "./assets/image4.svg"

 const Bars = () => {
  return (
    <MainSaidbar>
        
        <Sidebar>
            <div>
                <Eych1>Cost of Car</Eych1>
                __________________________
                <br/> <br />
                <Mjburlikdan>
                <Cost>
                Form 
                <input className='input' type="text" />
               </Cost>
               <Cost>
                To
                <input className='input' type="text" />
                </Cost>
                </Mjburlikdan>
            </div>

            <div>
                <Eych1>Brand</Eych1>
                __________________________ <br /> <br />
                <input type="checkbox"  Aidal/> Aidal <br />
                <input type="checkbox" name="Knal" id="" /> Knal <br />
                <input type="checkbox" name="" id="" /> Escape


            </div>
            <div>
                  <Eych1>Company</Eych1>
                  __________________________ <br /> <br />
                  <>
                <input type="checkbox"  Aidal/> Escape <br />
                </>
                <input type="checkbox" name="Knal" id="" /> Aidal
                
            </div>
            <div>
                     <Eych1>Licence Type</Eych1> 
                     __________________________<br /> <br />
                <input type="checkbox"  Aidal/> 1 year <br />
                <input type="checkbox" name="Knal" id="" /> 2 years <br />
                <input type="checkbox" name="" id="" /> 1,5 years <br />
            </div>
            <div>
                    <Eych1>Number Of Travelers</Eych1>
                    __________________________ <br /> <br />
                <input type="checkbox"  Aidal/> 3 <br />
                <input type="checkbox" name="Knal" id="" /> 4-5 <br />
                <input type="checkbox" name="" id="" /> 5+ <br />
            </div>
            <div>
                   <Eych1>Location</Eych1>
                   __________________________
                   <br /> <br />
                <input type="checkbox"  Aidal/> Seul <br /> 
                <input type="checkbox" name="Knal" id="" /> Korea <br />
                <input type="checkbox" name="" id="" /> Pusan <br /><br /><br />
                <Maelys $prime>Cancel</Maelys>
                <Maelys>Search</Maelys>
            </div>

             <Compare>
            <Image2></Image2>
            <Image3></Image3>
            <Image4></Image4>
            </Compare>

        </Sidebar>
        <MiddleBar>
            <TopBar>
                <div>
                <p className='page'>Item 25.556</p>
                </div>
                <Divv>
                Sort by <Selectt $agar>
                    <option value="">select</option>
                    <option value="">Cars</option>
                </Selectt>

                <Selectt>
                    <option value="">60</option>
                    <option value="">70</option>
                </Selectt>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7.00024 2H3.00024C2.44796 2 2.00024 2.44772 2.00024 3V7C2.00024 7.55229 2.44796 8 3.00024 8H7.00024C7.55253 8 8.00025 7.55229 8.00025 7V3C8.00025 2.44772 7.55253 2 7.00024 2Z" fill="#373737"/>
                 <path d="M14.8951 2H10.8951C10.3429 2 9.89514 2.44772 9.89514 3V7C9.89514 7.55229 10.3429 8 10.8951 8H14.8951C15.4474 8 15.8951 7.55229 15.8951 7V3C15.8951 2.44772 15.4474 2 14.8951 2Z" fill="#373737"/>
                 <path d="M7.00024 9.79999H3.00024C2.44796 9.79999 2.00024 10.2477 2.00024 10.8V14.8C2.00024 15.3523 2.44796 15.8 3.00024 15.8H7.00024C7.55253 15.8 8.00025 15.3523 8.00025 14.8V10.8C8.00025 10.2477 7.55253 9.79999 7.00024 9.79999Z" fill="#373737"/>
                 <path d="M14.8951 9.79999H10.8951C10.3429 9.79999 9.89514 10.2477 9.89514 10.8V14.8C9.89514 15.3523 10.3429 15.8 10.8951 15.8H14.8951C15.4474 15.8 15.8951 15.3523 15.8951 14.8V10.8C15.8951 10.2477 15.4474 9.79999 14.8951 9.79999Z" fill="#373737"/>
                 </svg>
                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M3.66667 12.8333H5.5C6.00417 12.8333 6.41667 12.4208 6.41667 11.9167V10.0833C6.41667 9.57918 6.00417 9.16668 5.5 9.16668H3.66667C3.1625 9.16668 2.75 9.57918 2.75 10.0833V11.9167C2.75 12.4208 3.1625 12.8333 3.66667 12.8333ZM3.66667 17.4167H5.5C6.00417 17.4167 6.41667 17.0042 6.41667 16.5V14.6667C6.41667 14.1625 6.00417 13.75 5.5 13.75H3.66667C3.1625 13.75 2.75 14.1625 2.75 14.6667V16.5C2.75 17.0042 3.1625 17.4167 3.66667 17.4167ZM3.66667 8.25001H5.5C6.00417 8.25001 6.41667 7.83751 6.41667 7.33334V5.50001C6.41667 4.99584 6.00417 4.58334 5.5 4.58334H3.66667C3.1625 4.58334 2.75 4.99584 2.75 5.50001V7.33334C2.75 7.83751 3.1625 8.25001 3.66667 8.25001ZM8.25 12.8333H18.3333C18.8375 12.8333 19.25 12.4208 19.25 11.9167V10.0833C19.25 9.57918 18.8375 9.16668 18.3333 9.16668H8.25C7.74583 9.16668 7.33333 9.57918 7.33333 10.0833V11.9167C7.33333 12.4208 7.74583 12.8333 8.25 12.8333ZM8.25 17.4167H18.3333C18.8375 17.4167 19.25 17.0042 19.25 16.5V14.6667C19.25 14.1625 18.8375 13.75 18.3333 13.75H8.25C7.74583 13.75 7.33333 14.1625 7.33333 14.6667V16.5C7.33333 17.0042 7.74583 17.4167 8.25 17.4167ZM7.33333 5.50001V7.33334C7.33333 7.83751 7.74583 8.25001 8.25 8.25001H18.3333C18.8375 8.25001 19.25 7.83751 19.25 7.33334V5.50001C19.25 4.99584 18.8375 4.58334 18.3333 4.58334H8.25C7.74583 4.58334 7.33333 4.99584 7.33333 5.50001Z" fill="#373737" fill-opacity="0.4"/>
                  </svg>
                  </Divv>
                 
            </TopBar>


            <CarsBar>
                <div className='Carss'>
                   <img src={imag} alt="" />
                   <H1ame>Name Of the Car</H1ame>
                   <Pcars>Brand Name</Pcars>
                   <Facars>250$</Facars>
                   <Order>Order</Order>
                   <Order>Compare</Order>
                </div>
                <div className='Carss'>
                     <img width={203} height={135} src={imag2} alt="" />
                   <H1ame>Name Of the Car</H1ame>
                   <Pcars>Brand Name</Pcars>
                   <Facars>250$</Facars>
                   <Order>Order</Order>
                   <Order>Compare</Order>
                </div>
                <div className='Carss'>
                     <img width={262} height={132} src={imag3} alt="" />
                   <H1ame>Name Of the Car</H1ame>
                   <Pcars>Brand Name</Pcars>
                   <Facars>250$</Facars>
                   <Order>Order</Order>
                   <Order>Compare</Order>
                </div>
                <div className='Carss'>
                     <img src={imag4} alt="" />
                   <H1ame>Name Of the Car</H1ame>
                   <Pcars>Brand Name</Pcars>
                   <Facars>250$</Facars>
                   <Order>Order</Order>
                   <Order>Compare</Order>
                </div>
                <div className='Carss'>
                    <img width={262} height={132} src={imag3} alt="" />
                   <H1ame>Name Of the Car</H1ame>
                   <Pcars>Brand Name</Pcars>
                   <Facars>250$</Facars>
                   <Order>Order</Order>
                   <Order>Compare</Order>
                </div>
                <div className='Carss'>
                    <img width={203} height={135} src={imag2} alt="" />
                   <H1ame>Name Of the Car</H1ame>
                   <Pcars>Brand Name</Pcars>
                   <Facars>250$</Facars>
                   <Order>Order</Order>
                   <Order>Compare</Order>
                </div>
                <div className='Carss'>
                    <img src={imag} alt="" />
                   <H1ame>Name Of the Car</H1ame>
                   <Pcars>Brand Name</Pcars>
                   <Facars>250$</Facars>
                   <Order>Order</Order>
                   <Order>Compare</Order>
                </div>
                <div className='Carss'>
                    <img src={imag4} alt="" />
                   <H1ame>Name Of the Car</H1ame>
                   <Pcars>Brand Name</Pcars>
                   <Facars>250$</Facars>
                   <Order>Order</Order>
                   <Order>Compare</Order>
                </div>
                <div className='Carss'>
                    <img width={203} height={135} src={imag2} alt="" />
                   <H1ame>Name Of the Car</H1ame>
                   <Pcars>Brand Name</Pcars>
                   <Facars>250$</Facars>
                   <Order>Order</Order>
                   <Order>Compare</Order>
                </div>
                <div className='Carss'> 
                    <img width={262} height={132} src={imag3} alt="" />
                   <H1ame>Name Of the Car</H1ame>
                   <Pcars>Brand Name</Pcars>
                   <Facars>250$</Facars>
                   <Order>Order</Order>
                   <Order>Compare</Order>
                </div>
                <div className='Carss'>
                    <img src={imag} alt="" />
                   <H1ame>Name Of the Car</H1ame>
                   <Pcars>Brand Name</Pcars>
                   <Facars>250$</Facars>
                   <Order>Order</Order>
                   <Order>Compare</Order>
                </div>
                <div className='Carss'>
                     <img width={203} height={135} src={imag2} alt="" />
                   <H1ame>Name Of the Car</H1ame>
                   <Pcars>Brand Name</Pcars>
                   <Facars>250$</Facars>
                   <Order>Order</Order>
                   <Order>Compare</Order>
                </div>
                <div className='Carss'>
                     <img width={262} height={132} src={imag3} alt="" />
                   <H1ame>Name Of the Car</H1ame>
                   <Pcars>Brand Name</Pcars>
                   <Facars>250$</Facars>
                   <Order>Order</Order>
                   <Order>Compare</Order>
                </div>
                <div className='Carss'>
                    <img src={imag} alt="" />
                   <H1ame>Name Of the Car</H1ame>
                   <Pcars>Brand Name</Pcars>
                   <Facars>250$</Facars>
                   <Order>Order</Order>
                   <Order>Compare</Order>
                </div>
                <div className='Carss'>
                    <img width={203} height={135} src={imag2} alt="" />
                   <H1ame>Name Of the Car</H1ame>
                   <Pcars>Brand Name</Pcars>
                   <Facars>250$</Facars>
                   <Order>Order</Order>
                   <Order>Compare</Order>
                </div>
                <div className='Carss'>
                     <img src={imag4} alt="" />
                   <H1ame>Name Of the Car</H1ame>
                   <Pcars>Brand Name</Pcars>
                   <Facars>250$</Facars>
                   <Order>Order</Order>
                   <Order>Compare</Order>
                </div>
                <div className='Carss'>
                      <img width={262} height={132} src={imag3} alt="" />
                   <H1ame>Name Of the Car</H1ame>
                   <Pcars>Brand Name</Pcars>
                   <Facars>250$</Facars>
                   <Order>Order</Order>
                   <Order>Compare</Order>
                </div>
                <div className='Carss'>
                    <img src={imag} alt="" />
                   <H1ame>Name Of the Car</H1ame>
                   <Pcars>Brand Name</Pcars>
                   <Facars>250$</Facars>
                   <Order>Order</Order>
                   <Order>Compare</Order>
                </div>
                <div className='Carss'>
                    <img width={203} height={135} src={imag2} alt="" />
                   <H1ame>Name Of the Car</H1ame>
                   <Pcars>Brand Name</Pcars>
                   <Facars>250$</Facars>
                   <Order>Order</Order>
                   <Order>Compare</Order>
                </div>
                <div className='Carss'>
                     <img width={262} height={132} src={imag3} alt="" />
                   <H1ame>Name Of the Car</H1ame>
                   <Pcars>Brand Name</Pcars>
                   <Facars>250$</Facars>
                   <Order>Order</Order>
                   <Order>Compare</Order>
                </div>
                
            </CarsBar>
        </MiddleBar>



    </MainSaidbar>
  )
}
export default Bars;
