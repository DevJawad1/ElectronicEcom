import React from 'react'
import hero from '../Assets/Img/landingImg.JPG'
import './Landing.css'
import { Link } from 'react-router-dom'
export const Landing = () => {
  return (
    <div className='hero ' style={{backgroundColor:"#F7F8F5"}}>
      <div className="trans-color h-100 d-flex d-md-block align-items-center">

    <div className='d-md-flex  w-100'>
      <div className='col-12 col-md-7 px-md-3'>
        <div className='p-3'>
          <h3 className='m-md-2 py-md-3 px-md-2 landing-title fw-bold'>
                Find Quality Electronice & <br /> Home Appliances from <br /> Verified Vendors 
          </h3>
          <div className="px-md-4 landing-sub-tit">
          <span className='fs-3 '>
            <span >Secure purchases, direct chat with sellers, and <br />hassle free transaction powered by Escow for <br />your safety
            </span>
          </span>
          </div>
          <div className='col-12 d-md-flex gap-md-3 gap-2 mt-3 px-md-4'>
          <button className='btn col-md-2 col-12 app-theme' style={{backgroundColor:"#0DC029", height:"50px"}}> 
            <Link to={'/register'} className='text-decoration-none text-white'>Get Started</Link>
          </button>
          <button className='btn col-md-5 col-12 mt-2 mt-md-0 linear-color text-white fw-semibold'>Check for Vendors in your Area</button>
          </div>
        </div>
      </div>
      <div className='col-12 col-md-5 px-md-3 mt-5 mt-md-0 d-none d-md-block'>
        <div className=''>
        <img className="her" src={hero} alt="" />
        </div>
      </div>
    </div>
      </div>
  </div>
  )
}
