import { PackageOpen } from 'lucide-react'
import React from 'react'

const NoProductFound = ({msg}) => {
  return (
    <div className='shadow p-3 mt-3 rounded text-center col-md-4 col-11 mx-auto'>
            <PackageOpen size={150} style={{color:"#0DC029"}}/>
            <h6 className='mt-1'>{msg || 'No product found here'}</h6>
            <button className='btn mt-2' style={{backgroundColor:"#0DC029"}}>Start Uploading</button>
        </div>
  )
}

export default NoProductFound