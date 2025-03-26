import React from 'react'

import {Navbar} from '../Components/Navbar/Navbar'
import {Landing} from '../Components/Landing/Landing'
import {Service} from '../Components/Service/Service'
import {Banner} from '../Components/Banner/Banner'
import {Footer} from '../Components/Footer/Footer'
export const Home = () => {
  return (
    <div clas>
      <Navbar/>
      <Landing/>
      <Banner/>
      <Service/>
      <Footer/>
    </div>
  )
}

export default Home