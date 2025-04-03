import React from 'react'

import {Navbar} from '../Components/Navbar/Navbar'
import {Landing} from '../Components/Landing/Landing'
import {Banner} from '../Components/Banner/Banner'
import {Footer} from '../Components/Footer/Footer'
import Services from '../Components/Service/Service'
import ProductSection from '../Components/Products'
import './home.css'
export const Home = () => {
  return (
    <div clas>
      <Navbar/>
      <div className="mt-1">
        <Landing/>
      </div>
      <Services />
      <ProductSection/>
      <div className="mt-5">
        <Banner/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home