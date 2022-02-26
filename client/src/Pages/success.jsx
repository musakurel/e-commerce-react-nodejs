import React from 'react'
import { useLocation } from 'react-router-dom';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Success = () => {

  const location= useLocation()
  console.log(location)
  return (

    <div>!

      <Navbar/>
      <div className="">
      Your order succesfully created
      </div>
      <Footer/>
    </div>
  )
}

export default Success