import React, { useState, useEffect } from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { Banner } from '../Components/Banner/Banner'
import PgIndicator from '../Components/pageIndicator/PgIndicator'
import CategoryDisp from '../Components/categoryDisp/CategoryDisp'
import axios from 'axios'
import { toast } from 'react-toastify'
import { MapPin, Star } from 'lucide-react'
import './shop.css'
const Shop = () => {
  const [latestPRD, setLatestPRD] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])

  const handleCategorySelection = (selected) => {
    setSelectedCategories(selected)
    console.log(selected)
  }

  const getNewProduct = async () => {
    try {
      const response = await axios.post('https://electrobackend-dbup.onrender.com/user/latestProduct')
      if (response.data.data) {
        setLatestPRD(response.data.data)
      }
      console.log(response.data)
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    getNewProduct()
  }, [])

  return (
    <div>
      <Navbar />
      <PgIndicator pgName={"Shop Page"} />
      <div className="mt-3 d-md-flex">
        <div className="category-box col-3 position-relative" style={{ paddingLeft: "5px", }}>
          <CategoryDisp onSelectChange={handleCategorySelection} />
        </div>

        <div className='col-md-9'>
          <div className="px-md-5 px-1 ">
            <Banner />
          </div>

          {selectedCategories.length > 0 && (
            <div className="mt-3">
              {
                selectedCategories.map((tit, i) => (

                  <div className="">
                    <div className="mt-5 px-5 mx-4">
                      <h6 className='fs-5'>
                        <span style={{ color: "#0DC029", textTransform: "capitalize" }}>{tit.category}</span> <span className='text-secondary'>AVAILABLE</span>
                      </h6>
                      <h6 className='text-secondary' style={{ fontSize: "13px", fontWeight: "200" }}>
                        Shop online for item closer to within your <span style={{ color: "#0DC029" }}>AREA!</span>
                      </h6>
                    </div>
                    {selectedCategories.map((item, idx) => (
                      <div key={idx} className={`${tit.category == item.category ? "d-flex flex-wrap gap-md-2" : "d-none"} px-md-4`}>
                        {item.items.map((product, i) => (
                          <div className="col-md-3 col-6 px-1 px-md-0">
                            <div className="shadow-sm mb-4 border bg-white rounded mt-md-3">
                              <img
                                src={product.image[0]}
                                alt={product.productTit}
                                className="card-img-top mt-2 mt-md-0 "
                              />
                              <div className="card-body p-2 pt-3">
                                <h6 className="text-muted" style={{ fontSize: "13px", fontWeight: "400" }}>{product.brand || 'Unknown Brand'}</h6>
                                <h5 className="card-title text-secondary mt-1" style={{ fontSize: "15px" }}>{product.productTit}</h5>
                                <div className="d-flex mt-4">
                                  {Array.from({ length: 5 }, (_, index) => (
                                    <Star
                                      key={index}
                                      size={14}
                                      className={`me-1 ${index < product.rating ? "text-warning" : "text-secondary"}`}
                                      fill={index < product.rating ? "#FACC15" : "grey"}
                                    />
                                  ))}
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-1">
                                  <p className="card-text font-weight-bold text-dark mt-2 fw-bold" style={{ color: "#4B5966" }}>
                                    ₦{product.price.toLocaleString()}
                                  </p>
                                  <p className="text-muted d-flex align-items-center" style={{ fontSize: "10px" }}>
                                    <MapPin size={14} className="me-1" />
                                    {product.address || 'Unknown'}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))
              }

            </div>
          )}

          {/* <h4 className='text-center mt-5'>
            <span style={{ color: "#0DC029" }}>HOME APPLIANCES</span> <span className='text-secondary'>AVAILABLE</span>
          </h4> */}

          {/* <div className="mt-5 px-5 mx-4">
            <h6 className='fs-5'>
              <span className='text-secondary'>Home Appliances</span> <span style={{ color: "#0DC029" }}>Items</span>
            </h6>
            <h6 className='text-secondary' style={{ fontSize: "13px", fontWeight: "200" }}>
              Shop online for item closer to within your <span style={{ color: "#0DC029" }}>AREA!</span>
            </h6>
          </div> */}

          {/* <div className="d-md-flex flex-wrap">
            {latestPRD.length > 0 && latestPRD.map((product, i) => (
              <div key={i} className='col-md-3 mx-auto col-11 px-2'>
                <div className="shadow-sm mb-4 border rounded mt-md-3">
                  <img
                    src={product.image[0]}
                    alt={product.productTit}
                    className="card-img-top mt-2 mt-md-0"
                    style={{ height: '250px', objectFit: 'contain' }}
                  />
                  <div className="card-body p-2 pt-3">
                    <h6 className="text-muted" style={{ fontSize: "13px", fontWeight: "400" }}>{product.brand || 'Unknown Brand'}</h6>
                    <h5 className="card-title text-secondary mt-1" style={{ fontSize: "15px" }}>{product.productTit}</h5>
                    <div className="d-flex mt-4">
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star
                          key={index}
                          size={14}
                          className={`me-1 ${index < product.rating ? "text-warning" : "text-secondary"}`}
                          fill={index < product.rating ? "#FACC15" : "grey"}
                        />
                      ))}
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-1">
                      <p className="card-text font-weight-bold text-dark mt-2 fw-bold" style={{ color: "#4B5966" }}>
                        ₦{product.price.toLocaleString()}
                      </p>
                      <p className="text-muted d-flex align-items-center" style={{ fontSize: "10px" }}>
                        <MapPin size={14} className="me-1" />
                        {product.address || 'Unknown'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Shop
