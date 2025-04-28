import { MapPin, Star } from 'lucide-react'
import React from 'react'
import { useNavigate,  } from 'react-router-dom'
const ProductDisp = ({product}) => {
    const navigate = useNavigate()
  return (
    
    <div className="col-md-3 col-6 px-1 px-md-1" onClick={()=>(localStorage.setItem('product', product._id), navigate('/productPage'))}>
    <div className="shadow-sm border bg-white rounded mt-md-3 mt-2">
      <img
        src={product.image[0]}
        alt={product.productTit}
        className="card-img-top  "
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
  )
}

export default ProductDisp