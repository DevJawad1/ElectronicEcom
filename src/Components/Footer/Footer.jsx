import React from 'react'
import logo from '../Assets/Img/Logo (3).png'
export const Footer = () => {
  return (
    <div className='mt-5 bg-light p-4 px-0' style={{backgroundColor:"#E9E9E9"}}>
        <div className='d-flex'>
            <div className="col-md-3">
            <img className="w-50 mx-5" src={logo} alt="" />
            </div>
            <div className="col-md-2 col-6 px-3">
                <h6 className='border-bottom d-flex align-items-center' style={{height:"40px"}}>Category</h6>
                <div className='text-secondary' style={{fontSize:"10px"}}>
                    <h6 style={{fontSize:"13px", fontWeight:"400"}}>Home Appliances</h6>
                    <h6 className='mt-3' style={{fontSize:"13px", fontWeight:"400"}}>Shoes and Sandals</h6>
                    <h6 className='mt-3' style={{fontSize:"13px", fontWeight:"400"}}>Building Materials</h6>
                    <h6 className='mt-3' style={{fontSize:"13px", fontWeight:"400"}}>Electronics Materials</h6>
                    <h6 className='mt-3' style={{fontSize:"13px", fontWeight:"400"}}>Phone and Gadget</h6>
                    <h6 className='mt-3' style={{fontSize:"13px", fontWeight:"400"}}>Laptops</h6>
                </div>
            </div>
            <div className="col-md-2 col-6 px-3">
            <h6 className='border-bottom d-flex align-items-center' style={{height:"40px"}}>Company</h6>
                <div className='text-secondary' style={{fontSize:"10px"}}>
                    <h6 style={{fontSize:"13px", fontWeight:"400"}}>About us</h6>
                    <h6 className='mt-3' style={{fontSize:"13px", fontWeight:"400"}}>Fast Delivery</h6>
                    <h6 className='mt-3' style={{fontSize:"13px", fontWeight:"400"}}>Legal Notice</h6>
                    <h6 className='mt-3' style={{fontSize:"13px", fontWeight:"400"}}>Terms & conditions</h6>
                    <h6 className='mt-3' style={{fontSize:"13px", fontWeight:"400"}}>Secure payment</h6>
                    <h6 className='mt-3' style={{fontSize:"13px", fontWeight:"400"}}>Contact us</h6>
                </div>
            </div>
            <div className="col-md-2 col-6 px-3">
                <h6 className='border-bottom d-flex align-items-center' style={{height:"40px"}}>Account</h6>
                <div className='text-secondary' style={{fontSize:"10px"}}>
                    <h6 style={{fontSize:"13px", fontWeight:"400"}}>Sign In</h6>
                    <h6 className='mt-3' style={{fontSize:"13px", fontWeight:"400"}}>View Cart</h6>
                    <h6 className='mt-3' style={{fontSize:"13px", fontWeight:"400"}}>Return Policy</h6>
                    <h6 className='mt-3' style={{fontSize:"13px", fontWeight:"400"}}>Become a Vendor</h6>
                    <h6 className='mt-3' style={{fontSize:"13px", fontWeight:"400"}}>Affilate Program</h6>
                    <h6 className='mt-3' style={{fontSize:"13px", fontWeight:"400"}}>Payment</h6>
                </div>
            </div>
            <div className="col-md-2 col-6">
                <h6 className='border-bottom d-flex align-items-center' style={{height:"40px"}}>Contact</h6>
                <div className='text-secondary' style={{fontSize:"10px"}}>
                    <h6 style={{fontSize:"13px", fontWeight:"400"}}>About us</h6>
                    <h6 className='mt-3' style={{fontSize:"13px", fontWeight:"400"}}>Fast Delivery</h6>
                </div>
            </div>
        </div>

    </div>
  )
}
