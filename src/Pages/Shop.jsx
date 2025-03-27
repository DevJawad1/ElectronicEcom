import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { Banner } from '../Components/Banner/Banner'
import PgIndicator from '../Components/pageIndicator/PgIndicator'
import CategoryDisp from '../Components/categoryDisp/CategoryDisp'

const Shop = () => {
  return (
    <div>
        <Navbar/>
        <PgIndicator pgName={"Shop Page"} />
        <div className="mt-3 d-flex">
          <div className="category-box col-3 position-relative " style={{paddingLeft:"5px", height:"100vh"}}>
            <CategoryDisp/>
          </div>
          <div className='col-9'>
            <div className="px-5">
            <Banner/>
            </div>

            <h4 className='text-center mt-5 '><span style={{color:"#0DC029"}}>HOME APPLIACES</span> <span className='text-secondary'>AVAILABLE</span></h4>

            <div className="mt-5 px-5 mx-4">
              <h6 className='fs-5'><span className='text-secondary'>Home Appliances</span> <span style={{color:"#0DC029"}}>Items</span></h6>
              <h6 className='text-secondary' style={{fontSize:"13px", fontWeight:"200"}}>Shop online for item closer to within your <span style={{color:"#0DC029"}}>AREA!</span></h6>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Shop