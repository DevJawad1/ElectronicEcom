import React from 'react'

const CategoryDisp = () => {

    const category = [
        {type:"Smart TV",total:3},
        {type:"LED TV",total:2},
        {type:"Freezer & Fridges",total:1},
        {type:"Generator",total:1},
        {type:"Speaker",total:3},
        {type:"MacBook",total:3},
        {type:"Iphone",total:2},
        {type:"Hp Laptops",total:1},
        {type:"Pouch /Screen Guide",total:10},
        {type:"Cloth",total:1},
        {type:"Belt",total:1},
    ]
  return (
    <div className="border h-100 w-100 rounded p-3 pt-3">
      <h6 className='px-2 border-bottom' style={{height:"40px", color:"#5CAF90"}}>Category</h6>

      <div className="mt-3">
        <h6 className='mt-1 text-secondary' style={{fontSize:"15px"}}>Home Appliances</h6>

        <div style={{lineHeight:"3.5"}}>
            {
                category.map((item, i)=>(
                    i<5?
                    <div className="d-flex justify-content-between fw-semibold" style={{color:"#999999", fontSize:"12px"}}>
                        <div className='d-flex gap-2' >
                            <input type="checkbox" name="" style={{border:"1px solid whitesmoke"}}/>
                            <span> {item.type} </span>
                        </div>
                        <span className='px-4'>({item.total})</span>
                    </div>
                    :null
                ))
            }
        </div>

        <h6 className='mt-1 text-secondary' style={{fontSize:"15px"}}>Laptops & Phones</h6>

        <div style={{lineHeight:"3.5"}}>
            {
                category.map((item, i)=>(
                    i>4 && i<9?
                    <div className="d-flex justify-content-between fw-semibold" style={{color:"#999999", fontSize:"12px"}}>
                        <div className='d-flex gap-2' >
                            <input type="checkbox" name="" id="" />
                            <span> {item.type} </span>
                        </div>
                        <span className='px-4'>({item.total})</span>
                    </div>
                    :null
                ))
            }
        </div>
        <h6 className='mt-1 text-secondary' style={{fontSize:"15px"}}>Accessories</h6>

        <div style={{lineHeight:"3.5"}}>
            {
                category.map((item, i)=>(
                    i>8?
                    <div className="d-flex justify-content-between fw-semibold" style={{color:"#999999", fontSize:"12px"}}>
                        <div className='d-flex gap-2' >
                            <input type="checkbox" name="" id="" />
                            <span> {item.type} </span>
                        </div>
                        <span className='px-4'>({item.total})</span>
                    </div>
                    :null
                ))
            }
        </div>



      </div>
    </div>
  )
}

export default CategoryDisp