import React from 'react'

const CartLoader = ({ count = 6 }) => {
  return (
    <div className="d-flex flex-wrap">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="col-md-2 col-6 cart-box-height px-1 px-md-1">
            <div className="bg-white rounded mt-md-3 mt-2 p-2">
              <div className="position-relative">
                <div
                  className="bg-secondary bg-opacity-25 rounded w-100"
                  style={{ height: '200px' }}
                ></div>
              </div>
              <div className="mt-3">
                <div className="bg-secondary bg-opacity-25 rounded w-75 mb-2" style={{ height: '10px' }}></div>
                <div className="bg-secondary bg-opacity-25 rounded w-50 mb-3" style={{ height: '10px' }}></div>
                <div className="bg-secondary bg-opacity-25 rounded w-50 mb-3 mt-4" style={{ height: '10px' }}></div>
                <div className="d-flex justify-content-between">
                  <div className="bg-secondary bg-opacity-25 rounded w-25" style={{ height: '10px' }}></div>
                  <div className="bg-secondary bg-opacity-25 rounded w-50" style={{ height: '10px' }}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default CartLoader
