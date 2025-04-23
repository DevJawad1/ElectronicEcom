import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import PgIndicator from '../../Components/pageIndicator/PgIndicator'
import CategoryDisp from '../../Components/categoryDisp/CategoryDisp'
import axios from 'axios'
import ContentLoader from "react-content-loader";
const Productpage = ({ userId }) => {
    const [loading, setloading] = useState(false)
    const [selectedCategories, setSelectedCategories] = useState([])
    const [product, setproduct] = useState(null)
    const productId = localStorage.getItem('product')
    const handleCategorySelection = (selected) => {
        setSelectedCategories(selected)
        console.log(selected)
    }

    const findProduct = async () => {
        try {
            setloading(true)
            const response = await axios.post("https://electrobackend-dbup.onrender.com/user/oneproduct", { productId, user: userId })
            console.log(response.data)
            setloading(false)
        } catch (err) {
            console.log(err)
        }finally{
            setloading(false)
        }
    }
    useEffect(() => {
        findProduct()
    }, [])
    return (
        <div>
            <Navbar />
            <PgIndicator pgName={'Product page'} />
            <div className="mt-3">
                <div className={`${loading?"d-flex":"d-none"} px-5`} style={{ height: '500px' }}>
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

                <div className={`${loading?"d-none":"d-flex"}`}>
                    .col-md-3
                    <CategoryDisp onSelectChange={handleCategorySelection} />
                </div>

            </div>
        </div>
    )
}

export default Productpage