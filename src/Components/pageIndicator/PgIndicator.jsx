import React from 'react'

const PgIndicator = ({pgName}) => {
  return (
    <div className='rounded p-3 px-4 mt-2 mx-2 d-flex align-items-center justify-content-between' style={{border: "2px solid whitesmoke", fontSize:"13px"}}>
        <span className='fw-semibold'>{pgName}</span>
        <div>
            <span>Home </span>
            <span style={{color:"#5CAF90"}}>{">"+ pgName}</span>
        </div>
    </div>
  )
}

export default PgIndicator