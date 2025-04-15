import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import PgIndicator from '../../Components/pageIndicator/PgIndicator'
import axios from 'axios'
import { PackageOpen } from "lucide-react";
import './myPrd.css'
import FullPageLoader from '../../Components/Loader/FullLoader';
const MyProduct = ({userId}) => {
    const [myProduct, setmyProduct] = useState('')
    const [loading, setloading] = useState(false)
    const userProduct = async()=>{
        try {
          setloading(true)
          const response = await axios.post('https://electrobackend-dbup.onrender.com/user/getUserProduct', {userId})  
          console.log(response)
          setmyProduct(response.data.products)
          setloading(false)
        } catch (error) {
          console.log(error)
          
        }
      }
    
    useEffect(()=>{
        userProduct()
    }, [])
  return (
    <div>
      <Navbar />
      {!myProduct.length>0 && <FullPageLoader msg={'Getting your Products'}/>}
      <div className="mt-2 mx-md-5">
        <PgIndicator pgName={"My Products"} />
      </div>
      {
        myProduct.length>0?
        <div className='p-2 mt-5 fw-thin'>
          <h5 className='text-secondary'>Available <span style={{color:"#0DC029"}}>Items</span></h5>
          <div className='d-md-flex mt-4 wrap gap-md-5'>
            {
              myProduct.map((prd, i)=>(
                <div className='w-100 border rounded'>
                  <div className="border-bottom">
                    <div className="col-12 myPrdImgHolder" style={{backgroundImage:`url(${prd.image[0]})`}}></div>
                  </div>
                  <div className="">
                    <p className='text-secondary text-end' style={{fontSize:"12px"}}>Uploaded 1 day ago</p>
                    <div className="p-2 pt-0 lh-1">
                      <p className='text-secondary'>{prd.productTit}</p>
                      <div className="line-heightmyPrd">
                        <p style={{color:"#566370"}}>{prd.cont}</p>
                        <p className='fw-bold' style={{color:"#626E79"}}>₦{prd.price}.00</p>
                      </div>
                    </div>

                    <div className="mt-3 d-flex gap-3 justify-content-center p-2 pt-0">
                        <button className='border border-0 rounded text-white' style={{backgroundColor:"#DA1B0D", width:"60px", height:"30px"}}>Delete</button>
                        <button className='border border-0 rounded text-white' style={{backgroundColor:"#5CAF90", width:"60px", height:"30px"}}>Edit</button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        :
        <div className='shadow p-3 mt-3 rounded text-center col-md-4 col-11 mx-auto'>
            <PackageOpen size={150} style={{color:"#0DC029"}}/>
            <h6 className='mt-1'>No product in your store</h6>
            <button className='btn mt-2' style={{backgroundColor:"#0DC029"}}>Start Uploading</button>
        </div>
      }
    </div>
  )
}

export default MyProduct