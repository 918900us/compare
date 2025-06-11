//import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router"
import Kirish from "./kirish"
import Navbar from "./navbar"
import Motor from "./motor"
import Footer from "./footer"
import { Tuning } from "./tuning"
import { UsedCars } from "./usedCars"
import { Camping } from "./camping"
import Caravan from "./caravan"









function App() {
  

  return (
    <BrowserRouter>

    <Navbar/>


    <Routes>
      <Route path="/" element={<Kirish/>}/>
      <Route path="/motor" element={<Motor/>}/>
      <Route path="/caravan" element={<Caravan/>}/>
      <Route path="/tuning" element={<Tuning/>}/>
      <Route path="/usedCars" element={<UsedCars/>}/>
      <Route path="/camping" element={<Camping/>}/>


    </Routes>
    <Footer/>
    
    </BrowserRouter>
  )
}

export default App
