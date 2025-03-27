import React from 'react'
import PgIndicator from '../Components/pageIndicator/PgIndicator'
import { Navbar } from '../Components/Navbar/Navbar'
import './upload.css'
const UploadProduct = () => {
  return (
    <div>
        <Navbar />
        <div className="mt-2 mx-5">
            <PgIndicator pgName={"Upload Product"}/>
        </div>

        <div className="d-flex">

        <div className="upload-box mt-4 pt-3 px-5 col-md-6">
            <h6 className='fs-4'><span className='text-secondary'>Upload</span> <span style={{color:"#0DC029"}}>Products/Items</span></h6>
            <div className="p-3 img-box px-4">
                <h6 className='' style={{color:"#4B5966"}}>Product Image</h6>
                <div className="p-1 inp rounded d-flex align-items-center justify-content-center" style={{height:"65vh", width:"39vw", }}>
                    <button className='btn shadow fs-5 w-50 text-white fw-semibold' style={{backgroundColor:"#0DC029"}}>Upload Product Images</button>
                </div>

                <h6 className='mt-4 pt-1' style={{color:"#4B5966"}}>Product Name</h6>
                <input type="text" name="" className='col-12 inp rounded' />

                <h6 className='mt-4 pt-1' style={{color:"#4B5966"}}>Product Price</h6>
                <input type="text" name="" className='col-12 inp rounded' />

                <h6 className='mt-4 pt-1' style={{color:"#4B5966"}}>Details</h6>
                <input type="text" name="" className='col-12 inp rounded' />
            </div>
        </div>

        <div className="col-md-6 mt-4 pt-5">
            <div className="d-flex">
                <div className='w-100'>
                    <h6>Product Image 1</h6>
                    <div className="p-1 imgs inp rounded d-flex align-items-center justify-content-center col-11" style={{height:"180px",}}>
                        <button className='btn shadow w-50 text-white fw-semibold' style={{backgroundColor:"#0DC029"}}>Image One</button>
                    </div>
                </div>
                <div className='w-100'>
                    <h6>Product Image 2</h6>
                    <div className="p-1 imgs inp rounded d-flex align-items-center justify-content-center col-11" style={{height:"180px",}}>
                        <button className='btn shadow w-50 text-white fw-semibold' style={{backgroundColor:"#0DC029"}}>Image Two</button>
                    </div>
                </div>
            </div>
            <h6 className='mt-4' style={{color:"#4B5966"}}>Description</h6>
            <div className="p-1 imgs rounded d-flex align-items-center justify-content-center" style={{height:"65vh", width:"47.5vw", }}>
                <button className='btn shadow fs-5 w-50 text-white fw-semibold' style={{backgroundColor:"#0DC029"}}>Upload Product Images</button>
            </div>
            <div className="text-center mt-3">
                <button className='col-10 btn text-white' style={{backgroundColor:"#0DC029", height:"50px"}}>Upload</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default UploadProduct