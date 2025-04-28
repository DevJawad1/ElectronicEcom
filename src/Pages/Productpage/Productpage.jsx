import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import PgIndicator from '../../Components/pageIndicator/PgIndicator'
import CategoryDisp from '../../Components/categoryDisp/CategoryDisp'
import axios from 'axios'
import ContentLoader from "react-content-loader";
import './productpage.css'
import { Eye, Heart, Loader, LucideMove, MapPin, Star } from 'lucide-react'
import { toast } from 'react-toastify'
import { LoadingExamples } from '../../Components/Loader/Animation'
import Spinner from '../../Components/Loader/Spinner'
import noImg from '../../Components/Assets/Img/noImg.JPG'
import { Banner } from '../../Components/Banner/Banner'
import ProductDisp from '../../Components/ProductDisp'
const Productpage = ({ userId }) => {
    const [loading, setloading] = useState(false)
    const [selectedCategories, setSelectedCategories] = useState([])
    const [product, setproduct] = useState(null)
    const [selectedPic, setselectedPic] = useState(0)
    const productId = localStorage.getItem('product')
    const [miniloading, setminiloading] = useState(false)
    const [productInfo, setProductInfo] = useState('details')
    const [relatedProduct, setRelatedProduct] = useState([])
    const [inLike, setinLike] = useState(false)
    const handleCategorySelection = (selected) => {
        setSelectedCategories(selected)
        console.log(selected)
    }

    const findProduct = async () => {
        try {
            setloading(true)
            const response = await axios.post("https://electrobackend-dbup.onrender.com/user/oneproduct", { productId, user: userId })
            console.log(response.data)
            setproduct(response.data.product)
            setloading(false)
            if (response.data.product) {
                setinLike(response.data.productLike)
                getcart(response.data.product)
                findVendor(response.data.product)
                relatedPrd(response.data.product)
                addlike(response.data.product, true)
            }
        } catch (err) {
            console.log(err)
        } finally {
            setloading(false)
        }
    }
    useEffect(() => {
        findProduct()
    }, [])

    const [vendor, setVendor] = useState('')
    const findVendor = async (prd) => {
        try {
            const response = await axios.post('https://electrobackend-dbup.onrender.com/user/storeAddress', { owner: prd?.owner })
            setVendor(response.data.vendor)
        } catch (error) {

        }
    }

    const [countCart, setcountCart] = useState(0)
    const getcart = async (prd) => {
        try {
            const response = await axios.post('https://electrobackend-dbup.onrender.com/user/PTcart', { buyer: userId, product: prd?._id })
            console.log(response)
            if (response.data.status) {
                setcountCart(response.data.quantity)
            }

        } catch (error) {
            console.log(error)
        }
    }
    const [reload, setreload] = useState(false)
    const addCart = async (prd) => {
        try {
            setminiloading('cart')
            const response = await axios.post('https://electrobackend-dbup.onrender.com/user/addcart',
                { product: product._id, buyer: userId, quantity: 1 })
            response.data.status ? toast.success(response.data.message) : toast.error(response.data.message)

            setcountCart(response.data.quantity)
            setreload('cart')
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        } finally {
            setminiloading(false)
        }
    }

    const deletecart = async (prd) => {
        try {
            setminiloading('cart')
            const response = await axios.post('https://electrobackend-dbup.onrender.com/user/deletecart', { product: prd._id, buyer: userId, })
            if (response.data.status) {
                setcountCart(response.data.quantity)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        } finally {
            setminiloading(false)
        }
    }


    const relatedPrd = async (product) => {
        try {
            const response = await axios.post('https://electrobackend-dbup.onrender.com/user/popularPrdCategory', { product: product._id })
            setRelatedProduct(response.data.product)
        } catch (error) {
            console.log(error)
        }
    }
    
    const addlike=async(prd, getter)=>{
        try {
            setminiloading('like')
            const response = await axios.post('https://electrobackend-dbup.onrender.com/user/productLike', { user:userId,product: prd._id, getter })
            setminiloading(false)
            setinLike(response.data.like)
            toast.success(response.data.msg)
            setreload('like')
            // console.log(response.data)
            
        } catch (error) {
            console.log(error)
            setminiloading(false)
            toast.error("Error occur getting wishlist, try again !")
        }
    }
    return (
        <div>
            <Navbar userId={userId} reload={reload} />
            <PgIndicator pgName={'Product page'} />
            <div className="mt-3">
                <div className={`${loading ? "d-flex" : "d-none"} px-5`} style={{ height: '500px' }}>
                    {/* Left block - solid vertical placeholder */}
                    <ContentLoader
                        viewBox="0 0 400 500"
                        height={500}
                        width={400}
                        className="rounded-start"
                    >
                        {/* rx/ry sets the border-radius for SVG rect */}
                        <rect x="0" y="0" rx="10" ry="10" width="400" height="500" />
                    </ContentLoader>

                    {/* Right block - content layout */}
                    <ContentLoader
                        viewBox="0 0 500 600"
                        height={500}
                        width={500}
                        className=" rounded-end flex-grow-1 mt-2"
                    >
                        {/* Simulated image */}
                        <rect x="0" y="0" rx="5" ry="5" width="500" height="300" />

                        {/* Title */}
                        <rect x="0" y="320" rx="4" ry="4" width="400" height="30" />

                        {/* Subtitle */}
                        <rect x="0" y="370" rx="3" ry="3" width="200" height="20" />

                        {/* Button */}
                        <rect x="0" y="410" rx="3" ry="3" width="150" height="40" />

                        {/* Additional content */}
                        <rect x="0" y="470" rx="4" ry="4" width="500" height="100" />
                    </ContentLoader>
                    <ContentLoader
                        viewBox="0 0 400 500"
                        height={500}
                        width={400}
                        className="rounded-start"
                    >
                        {/* rx/ry sets the border-radius for SVG rect */}
                        <rect x="0" y="0" rx="10" ry="10" width="400" height="500" />
                    </ContentLoader>
                </div>

                {product && <div className={`${loading ? "d-none" : "d-md-flex"}`}>
                    <div className="col-md-3 px-3">
                        <div className="bg-light">
                            <CategoryDisp onSelectChange={handleCategorySelection} categoryName={product.category} />
                        </div>
                    </div>
                    <div className="col-md-9 ">
                        <div className="w-100 d-md-flex">

                            <div className="col-md-6">
                                <div className="px-2">
                                    <div className="border pt-3 rounded">
                                        <div className="display-img" style={{ backgroundImage: `url(${product.image[selectedPic]})` }}></div>
                                        <div className="mt-2">
                                            <div className="d-flex">
                                                {
                                                    product.image.map((pic, i) => (
                                                        <img src={pic} alt=""
                                                            className={`gallery-img mx-auto rounded ${selectedPic === i ? "selectedPic" : null}`} onClick={() => setselectedPic(i)} />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 px-3 mt-3 mt-md-0">
                                <h4 className='text-secondary'>{product.productTit}</h4>
                                <div className="d-flex gap-3 align-item-center mt-3">
                                    <div>
                                        {Array.from({ length: 5 }, (_, index) => (
                                            <Star
                                                key={index}
                                                size={14}
                                                className={`me-1 ${index < product.rating ? "" : "text-secondary"}`}
                                                fill={index < product.rating ? "#F27D0C" : "white"}
                                                style={{ color: "#F27D0C" }}
                                            />
                                        ))}
                                    </div>
                                    <h6 style={{ borderLeft: "1px solid", fontWeight: "400" }} className='mt-1 px-2 text-secondary'>{product.rating} Rating</h6>

                                </div>
                                <div className="text-style">
                                    <h5 className='fw-bold mt-4' style={{ color: "#4B5966" }}>#{product.price.toLocaleString()}.00</h5>

                                    <div className="mt-md-5 mt-2">
                                        <h6>{product.cont}</h6>
                                        <h6 style={{ textTransform: "capitalize" }}> <span style={{ color: "#065A13" }} className='fw-bold'>Store Address:</span> {vendor?.address}</h6>
                                    </div>

                                    <ul className='mt-3'>
                                        <li><span style={{ color: "#777777" }} className='fw-semibold'>Type : </span>Not specified</li>
                                        <li><span style={{ color: "#777777" }} className='fw-semibold'>Product : </span>{product.brand || 'Not specified'}</li>
                                        <li><span style={{ color: "#777777" }} className='fw-semibold'>Width : </span>Not specified</li>
                                        <li><span style={{ color: "#777777" }} className='fw-semibold'>Others : </span>Not specified</li>
                                    </ul>


                                    <div className="mt-3">
                                        <h6 style={{ color: "#2E2E2E" }}>SIZE</h6>
                                        <li className='px-3'><span className='fw-bold'>Not specified</span></li>
                                    </div>

                                    <div className="button-div d-flex gap-2 align-items-center">
                                        <div className="border d-flex rounded col-md-3 col-6 align-items-center mt-3 justify-content-between">
                                            <button className="btn" onClick={() => { deletecart(product) }}>-</button>
                                            <h6 className='pt-2'>{miniloading=='cart' ? <Spinner /> : countCart}</h6>
                                            <button className='btn' onClick={() => { addCart(product) }}>+</button>
                                        </div>

                                        <button className="btn btn-secondary col-3 mt-3" style={{ height: "40px" }}>Proceed</button>

                                        <button className='border border-2 btn mt-3' onClick={()=>{addlike(product, false)}} style={{backgroundColor:inLike?"#0DC029":"white"}}> 
                                        { miniloading=='like'?<Spinner/>: 
                                        <Heart size={17} className='text-white' fill={inLike?"white":null}/> }
                                        </button>
                                        <button className='border border-2 btn mt-3'> <Eye size={17} /> </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="mt-3 border rounded p-2">
                            <div className="d-flex">
                                <div className="col-md-2 col-4 px-1">
                                    <div className="btn border border-2 w-100" onClick={() => setProductInfo('details')}>Details</div>
                                </div>
                                <div className="col-md-2 col-4 px-1">
                                    <div className="btn border border-2 w-100" onClick={() => setProductInfo('vendor')}>Vendors</div>
                                </div>
                                <div className="col-md-2 col-4 px-1">
                                    <div className="btn border border-2 w-100" onClick={() => setProductInfo('review')}>Reviews</div>
                                </div>
                            </div>

                            {
                                productInfo == 'details' &&
                                <div className='p-3 shadow-sm mt-2 border rounded'>
                                    <h6>{product.cont}</h6>
                                </div>
                            }
                            {
                                productInfo == 'vendor' &&
                                <div className='p-3 shadow-sm mt-2 border'>
                                    <div className="d-md-flex">
                                        <div className="col-md-3 text-center">
                                            <div className="position-relative mx-auto" style={{ width: "180px", height: "180px" }}>
                                                <img
                                                    src={noImg}
                                                    alt="Profile"
                                                    className="rounded-circle bg-light"
                                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-5 text-center text-md-start">
                                            <div className="mb-4">
                                                <div className="text-secondary">Name</div>
                                                <div className="fs-5 fw-bold" style={{ textTransform: "uppercase" }}>{vendor.fullName || 'Loading...'}</div>
                                            </div>
                                            <div className="mb-4">
                                                <div className="text-secondary">Business Name</div>
                                                <div className="fs-5 fw-bold" style={{ textTransform: "uppercase" }}>{vendor.businessName || 'Loading...'}</div>
                                            </div>
                                            <div>
                                                <div className="text-secondary">Office Address</div>
                                                <div className="fs-5 fw-bold" style={{ textTransform: "uppercase" }}>{vendor.address || 'Loading...'}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                productInfo == 'review' &&
                                <div>

                                </div>
                            }
                        </div>

                        <div className="mt-4 px-md-5">
                            <Banner />
                        </div>

                    </div>

                </div>}

            </div>
            <div className='position-relative bg-white pt-5' style={{ zIndex: "2" }}>
                <div className="text-center">
                    <h6>Related <span style={{ color: "#9BEC00" }}>Products</span></h6>
                    <h6>Brows the collection of Top product</h6>
                </div>

                <div className="d-flex flex-wrap">
                    {
                        relatedProduct.map((item, i) => (
                            <div className="productpage-prdBox px-1 px-md-1" onClick={() => (localStorage.setItem('product', product._id))}>
                                <div className="shadow-sm border bg-white rounded mt-md-3 mt-2">
                                    <img
                                        src={item.image[0]}
                                        alt={item.productTit}
                                        className="card-img-top  "
                                    />
                                    <div className="card-body p-2 pt-3">
                                        <h6 className="text-muted" style={{ fontSize: "13px", fontWeight: "400" }}>{item.brand || 'Unknown Brand'}</h6>
                                        <h5 className="card-title text-secondary mt-1" style={{ fontSize: "15px" }}>{item.productTit}</h5>
                                        <div className="d-flex mt-4">
                                            {Array.from({ length: 5 }, (_, index) => (
                                                <Star
                                                    key={index}
                                                    size={14}
                                                    className={`me-1 ${index < item.rating ? "text-warning" : "text-secondary"}`}
                                                    fill={index < item.rating ? "#FACC15" : "grey"}
                                                />
                                            ))}
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mt-1">
                                            <p className="card-text font-weight-bold text-dark mt-2 fw-bold" style={{ color: "#4B5966" }}>
                                                ₦{item.price.toLocaleString()}
                                            </p>
                                            <p className="text-muted d-flex align-items-center" style={{ fontSize: "10px" }}>
                                                <MapPin size={14} className="me-1" />
                                                {item.address || 'Unknown'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Productpage