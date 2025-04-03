import React from 'react'
import hero from '../Assets/Img/landingImg.JPG'
import './Landing.css'
import { Link } from 'react-router-dom'
export const Landing = () => {
  return (
    <div className='hero' style={{backgroundColor:"#F7F8F5"}}>
    <div className='row'>
      <div className='col-10 col-md-6 px-3'>
        <div className='m-3 p-3'>
          <h3 className='m-2 py-3 px-2 h1 '>
                Find Quality Electronice & Home Appliances from Verified Vendors 
          </h3>
          <span className='ms-2 py-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere expedita odio provident blanditiis nam maxime, iusto ducimus mollitia reprehenderit dignissimos saepe sunt eos. Totam repudiandae quaerat odio dolorum praesentium dolor.
          </span>
          <div className=''>
          <button className='btn my-5 mx-2 w-25 app-theme' style={{backgroundColor:"#0DC029", height:"50px"}}> 
            <Link to={'/register'} className='text-decoration-none text-white'>Get Started</Link>
          </button>
          <button className='btn my-5 mx-2 w-50 linear-color text-white fw-semibold'>Check for Vendors in your Area</button>
          </div>
        </div>
      </div>
      <div className='col-10 col-md-6 px-3 d-none d-md-block'>
        <div className=''>
        <img className=" mx-5 her" src={hero} alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}
