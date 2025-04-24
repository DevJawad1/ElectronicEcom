import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import PgIndicator from '../../Components/pageIndicator/PgIndicator'
import CategoryDisp from '../../Components/categoryDisp/CategoryDisp'
import axios from 'axios'
import ContentLoader from "react-content-loader";
import './productpage.css'
import { Loader, Star } from 'lucide-react'
import { toast } from 'react-toastify'
import { LoadingExamples } from '../../Components/Loader/Animation'
import Spinner from '../../Components/Loader/Spinner'
const Productpage = ({ userId }) => {
    const [loading, setloading] = useState(false)
    const [selectedCategories, setSelectedCategories] = useState([])
    const [product, setproduct] = useState(null)
    const [selectedPic, setselectedPic] = useState(0)
    const productId = localStorage.getItem('product')
    const [miniloading , setminiloading ] = useState(false)
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
                getcart(response.data.product)
                findStoreAddress(response.data.product)
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

    const [productStore, setproductStore] = useState('')
    const findStoreAddress = async (prd) => {
        try {
            const response = await axios.post('https://electrobackend-dbup.onrender.com/user/storeAddress', { owner: prd?.owner })
            setproductStore(response.data.address)
        } catch (error) {

        }
    }

    const [countCart, setcountCart] = useState(0)
    const getcart=async(prd)=>{
        try {
            const response = await axios.post('https://electrobackend-dbup.onrender.com/user/PTcart', {buyer:userId, product:prd?._id})
            console.log(response)
            if(response.data.status){
                setcountCart(response.data.quantity)
            }

        } catch (error) {
            console.log(error)
        }
    }
    const [reload, setreload] = useState(false)
    const addCart=async(prd)=>{
        try {   
            setminiloading(true)
            const response = await axios.post('https://electrobackend-dbup.onrender.com/user/addcart',
            {product:product._id, buyer:userId, quantity:1})
            response.data.status?toast.success(response.data.message):toast.error(response.data.message)

            setcountCart(response.data.quantity)
            setreload(true)
        } catch (error) {   
            console.log(error)
            toast.error(error.message)
        }finally{
            setminiloading(false)
        }
    }

    const deletecart=async(prd)=>{
        try {
            setminiloading(true)
            const response = await axios.post('https://electrobackend-dbup.onrender.com/user/deletecart',{product:prd._id, buyer:userId,})
            if(response.data.status){
                setcountCart(response.data.quantity)
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }finally{
            setminiloading(false)
        }
    }

    
    return (
        <div>
            <Navbar userId={userId} reload={reload}/>
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
                    <div className="col-md-9 d-md-flex">
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
                                    <h6 style={{ textTransform: "capitalize" }}> <span style={{ color: "#065A13" }} className='fw-bold'>Store Address:</span> {productStore}</h6>
                                </div>

                                <ul className='mt-3'>
                                    <li><span style={{ color: "#777777" }} className='fw-semibold'>Type : </span>Not specified</li>
                                    <li><span style={{ color: "#777777" }} className='fw-semibold'>Product : </span>{product.brand || 'Not specified'}</li>
                                    <li><span style={{ color: "#777777" }} className='fw-semibold'>Width : </span>Not specified</li>
                                    <li><span style={{ color: "#777777" }} className='fw-semibold'>Others : </span>Not specified</li>
                                </ul>


                                <div className="mt-3">
                                    <h6 style={{color:"#2E2E2E"}}>SIZE</h6>
                                    <li className='px-3'><span className='fw-bold'>Not specified</span></li>
                                </div>

                                <div className="button-div">
                                    <div className="border d-flex rounded col-md-3 col-6  align-items-center mt-3 justify-content-between">
                                        <button className="btn fs-5" onClick={()=>{deletecart(product)}}>-</button>
                                        <h6 className='pt-2'>{miniloading?<Spinner/>:countCart}</h6>
                                        <button className='btn' onClick={()=>{addCart(product)}}>+</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>}

            </div>
        </div>
    )
}

export default Productpage