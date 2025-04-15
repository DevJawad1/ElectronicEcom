import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import PgIndicator from '../../Components/pageIndicator/PgIndicator'
import axios from 'axios'
import { PackageOpen } from "lucide-react";
const MyProduct = ({userId}) => {
    const [myProduct, setmyProduct] = useState('')
    
    const userProduct = async()=>{
        try {
          const response = await axios.post('https://electrobackend-dbup.onrender.com/user/getUserProduct', {userId})  
          console.log(response)
          setmyProduct(response.data.products)
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
      <div className="mt-2 mx-md-5">
        <PgIndicator pgName={"My Products"} />
      </div>
      {
        myProduct.length>0?
        <div className='p-2 mt-5 fw-thin'>
          <h5 className='text-secondary'>Available <span style={{color:"#0DC029"}}>Items</span></h5>
          <div className='d-flex wrap mt-3'>
            {
              myProduct.map((prd, i)=>(
                <div className='col-md-3 px-2'>
                  <img src={prd.image[0]} alt="product image" />
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