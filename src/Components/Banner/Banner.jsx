import React from 'react'
import bann1 from '../Assets/Img/TV1.png'
import bann2 from '../Assets/Img/Speaker1.png'
import banner from '../Assets/Img/banner.JPG'
import bann3 from '../Assets/Img/HomeAppliances.png'
import './Banner.css'
export const Banner = () => {
  return (
      <div className='banner text-center'>
        <img className="col-12" src={banner} alt="" />
        {/* <div className='bann mx-5'>
              <div className='row'>
              <div className='col-7'>
                <div className='w-50 p-5'>
                    <h3 className='p-3 text-light'>
                      EXPLORE OUR HOME APPLIANCE WITHIN YOUR AREA
                    </h3>
                </div>

              </div>
              <div className='col-5'>
              <img className="ban1" src={bann2} alt="" />
              <img className="ban3" src={bann1} alt="" />
              <img className="ban2" src={bann3} alt="" />
              </div>
              </div>
        </div> */}

      </div>
  )
}