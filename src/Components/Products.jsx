import React,{useState, useEffect} from "react";
import { Star, MapPin, ArrowRight } from "lucide-react";
import frezer from './Assets/Img/Image11 1.png';
import samsung from './Assets/Img/Samsung IMG 1.png';
import tv from './Assets/Img/TV1.png';
import play from './Assets/Img/Sony Playstation - PS5 1.png';
import { toast } from "react-toastify";
import axios from "axios";
// const products = [
//   {
//     id: 1,
//     name: "50litres Deep Freezer",
//     brand: "Nexus",
//     price: 350000,
//     image: frezer,
//     rating: 4,
//     location: "Ibadan, Nigeria",
//     isNew: true,
//   },
//   {
//     id: 2,
//     name: "60-Inch Smart TV",
//     brand: "Samsung",
//     price: 450000,
//     image: samsung,
//     rating: 4,
//     location: "Ibadan, Nigeria",
//     isNew: true,
//   },
//   {
//     id: 3,
//     name: "55-Inches LED TV",
//     brand: "Hisense",
//     price: 250000,
//     image: tv,
//     rating: 3,
//     location: "Ibadan, Nigeria",
//     isNew: true,
//   },
//   {
//     id: 4,
//     name: "Sony 55-Inch PS4",
//     brand: "Sony",
//     price: 300000,
//     image: play,
//     rating: 5,
//     location: "Ibadan, Nigeria",
//     isNew: true,
//   },
// ];

const products=[]
const ProductCard = ({ product }) => {
  const [latestPRD, setLatestPRD] = useState([])
    const getNewProduct = async () => {
      try {
        const response = await axios.post('https://electrobackend-dbup.onrender.com/user/latestProduct')
        setLatestPRD(response.data.data)
        products=response.data.data
        console.log(response.data)
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }
  
    useEffect(()=>{
      getNewProduct()
    }, [])
  return (
    <div className="shadow-sm mb-4 border rounded mt-md-3">
      {product.isNew && (
        <span className="position-absolute top-0 end-0 bg-success text-white text-xs px-2 py-1 rounded">
          NEW
        </span>
      )}
      <img
        src={product.image[0]}
        alt={product.productTit}
        className="card-img-top mt-2 mt-md-0"
        style={{ height: '200px', objectFit: 'contain' }}
      />
      <div className="card-body p-2 pt-3">
        <h6 className="text-muted" style={{fontSize:"13px", fontWeight:"400"}}>{product.brand|| 'No brand yet'}</h6>
        <h5 className="card-title text-secondary mt-1" style={{fontSize:"15px"}}>{product.name}</h5>
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
        <div className="d-flex align-items-center justify-content-between mt-1" >
        <p className="card-text font-weight-bold text-dark mt-2 fw-bold " style={{color:"#4B5966"}}>
          ₦{product.price.toLocaleString()}
        </p>
        <p className="text-muted d-flex align-items-center" style={{fontSize:"10px"}}>
          <MapPin size={14} className="me-1" />
          {product.address|| 'Unkonw'}
        </p>
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  return (
    <div className="px-md-5 my-5 home-box pt-md-5">
      <h2 className="h2 font-weight-bold">
        Newly Uploaded <span className="text-success">Deals</span>
      </h2>
      <p className="text-muted">Don’t wait. Check it out, maybe it’s what you need.</p>

      <div className="d-md-flex">
        {products.map((product) => (
          <div className="col-md-3  mx-auto col-11 px-2" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <button className="rounded bg-white p-3 col-4 mx-2 fw-bold fs-5" style={{border:"3px solid #0DC029", color:"#0DC029"}}>Start Exploring <ArrowRight/></button>
    </div>
  );
};

export default ProductSection;
