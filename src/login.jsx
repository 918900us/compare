import { useEffect, useState } from 'react'
import CampingCars from './mockdata'

export const Login = () => {


  return (
    <>
    <h1>Mock data</h1>
    
    {
        CampingCars.map((CampingCars)=> (<li key= {CampingCars.name}>{CampingCars.brand}</li>))
    }
    </>
  )
}
