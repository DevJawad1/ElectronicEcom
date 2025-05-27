import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Navbar } from '../../Components/Navbar/Navbar'
import PgIndicator from '../../Components/pageIndicator/PgIndicator'
import { ArrowRight, Dot, MapPin, MessageCircleDashed, MessageCircleMore, MoreHorizontal, ShoppingCart, Trash } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import './cart.css'
import CartLoader from '../../Components/CartLoader'
const Cart = ({ userId }) => {
  const [myCarts, setMyCarts] = useState([])
  const [quantities, setQuantities] = useState({})
  const [loading, setLoading] = useState(false)
  const [miniloading, setMiniloading] = useState(false)
  const navigate = useNavigate()
  const getEachCart = async (prd) => {
    try {
      const response = await axios.post('https://electrobackend-dbup.onrender.com/user/PTcart', {
        buyer: userId,
        product: prd,
      })
      if (response.data.status) {
        return response.data.quantity
      }
    } catch (error) {
      console.log(error)
    }
    return 0
  }

  const getcart = async () => {
    try {
      setLoading(true)
      const response = await axios.post('https://electrobackend-dbup.onrender.com/user/cart', {
        buyer: userId,
      })
      if (response.data.status) {
        const cart = response.data.cart
        setMyCarts(cart)

        // Load quantities for each item
        const qtyObj = {}
        await Promise.all(
          cart.map(async (product) => {
            const quantity = await getEachCart(product._id)
            qtyObj[product._id] = quantity
          })
        )
        setQuantities(qtyObj)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }


  const deleteCart = async (prd) => {
    try {

      const response = await axios.post('https://electrobackend-dbup.onrender.com/user/realDelete', { product: prd, buyer: userId })
      if (response.data.status) {
        getcart()
        toast.success(response.data.msg)
      } else { toast.error(response.data.msg) }
    } catch (error) {
      toast(error.message)
    }
  }
  useEffect(() => {
    getcart()
  }, [])

  const addChat=async(seller, prdId)=>{
    console.log('sel;')
    try {
      const chattersSaver = await axios.post('https://electrobackend-dbup.onrender.com/user/chatter', {chatter1:userId, chatter2:seller, purpose:prdId})

      if(chattersSaver.status){
        localStorage.setItem("autoChatter", seller)
        navigate('/myChat')
      }
      
      // setusers(sellerRes.data.sellers);
    } catch (sellerErr) {
      console.log(sellerErr)
      toast.error("Error getting sellers: " + sellerErr.message);
    }
  }
  return (
    <div>
      <Navbar userId={userId} />
      <div className="mx-md-5">
        <PgIndicator pgName={'My cart'} />

        <div className="mt-3">
          {
            loading ?
              <CartLoader /> :
              myCarts.length > 0 ?
                <div className="d-flex flex-wrap">
                  {myCarts.map((product) => (
                    <div key={product._id} className="col-md-2 col-6 cart-box-height px-1 px-md-1">
                      <div className="shadow border bg-white rounded mt-md-3 mt-2">
                        <div className="p-1">
                          {/* action and option */}
                          <div class="dropdown">
                            <button class="border border-0 rounded" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <MoreHorizontal />
                            </button>
                            <ul class="dropdown-menu ">
                              <li>
                                <div className="dropdown-item d-flex gap-2 align-items-center rounded px-2" onClick={()=>{deleteCart(product._id)}}>
                                  <div className="rounded shadow-sm bg-white p-1 col-md-3 text-center">
                                    <Trash size={17}/> 
                                  </div>
                                  <span className="fw-semibod">Delete </span>
                                </div>
                              </li>
                              <li onClick={()=> addChat(product.owner, product._id)}>
                              <div className="dropdown-item d-flex gap-2 align-items-center rounded px-2" >
                                  <div className="rounded shadow-sm bg-white p-1 col-md-3 text-center">
                                    <MessageCircleMore size={17}/> 
                                  </div>
                                  <span className="fw-semibol">Chat Seller </span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <img
                          src={product.image[0]}
                          alt={product.productTit}
                          className="card-img mt-1 px-2 pt-0"

                          style={{ objectFit: "contain" }}
                        />
                        <div className="card-body p-2 pt-3">
                          <h6
                            className="text-muted"
                            style={{ fontSize: '13px', fontWeight: '400' }}
                          >
                            {product.brand || 'Unknown Brand'}
                          </h6>
                          <h5
                            className="card-title text-secondary mt-1"
                            style={{ fontSize: '15px' }}
                          >
                            {product.productTit}
                          </h5>
                          <div className="d-flex mt-3">
                            <span className="fw-semibold">Pieces: {quantities[product._id] || 0}</span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <p
                              className="card-text font-weight-bold text-dark mt-2 fw-bold"
                              style={{ color: '#4B5966' }}
                            >
                              ₦{product.price.toLocaleString()}
                            </p>
                            <p
                              className="text-muted d-flex align-items-center"
                              style={{ fontSize: '10px' }}
                            >
                              <MapPin size={14} className="me-1" />
                              {product.address || 'Unknown'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                :
                <div className="shadow p-3 mt-3 rounded text-center col-md-4 col-11 mx-auto">
                  <ShoppingCart size={150} style={{ color: '#0DC029' }} />
                  <h6 className="mt-1">No product found in your cart</h6>
                  <button className="btn mt-2" style={{ backgroundColor: '#0DC029' }}>
                    <Link to={'/shop'} className="text-decoration-none text-white">
                      Start Shopping <ArrowRight />
                    </Link>
                  </button>
                </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Cart
