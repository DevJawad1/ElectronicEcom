import React from "react";
import { Star, MapPin } from "lucide-react";
import frezer from './Assets/Img/Image11 1.png'
import samsung from './Assets/Img/Samsung IMG 1.png'
import tv from './Assets/Img/TV1.png'
import play from './Assets/Img/Sony Playstation - PS5 1.png'
const products = [
  {
    id: 1,
    name: "Nexus Chest Double Door Freezer NX-595CP",
    brand: "Nexus",
    price: 350000,
    image: frezer,
    rating: 4,
    location: "Ibadan, Nigeria",
    isNew: true,
  },
  {
    id: 2,
    name: "Samsung 60-Inch Class QLED 4K Smart TV",
    brand: "Samsung",
    price: 450000,
    image: samsung,
    rating: 4,
    location: "Ibadan, Nigeria",
    isNew: true,
  },
  {
    id: 3,
    name: "Hisense 55-Inch Class A6 Series 4K UHD Smart TV",
    brand: "Hisense",
    price: 250000,
    image: tv,
    rating: 3,
    location: "Ibadan, Nigeria",
    isNew: true,
  },
  {
    id: 4,
    name: "Sony 55-Inch 4K Ultra HD TV X80K Series",
    brand: "Sony",
    price: 300000,
    image: play,
    rating: 5,
    location: "Ibadan, Nigeria",
    isNew: true,
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden p-4">
      {product.isNew && (
        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
          NEW
        </span>
      )}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <div className="mt-3">
        <h6 className="text-gray-500 text-sm">{product.brand}</h6>
        <h5 className="font-semibold text-lg">{product.name}</h5>
        <div className="flex">
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              size={14}
              className={`mr-1 ${index < product.rating ? "text-yellow-400" : "text-gray-300"}`}
              fill={index < product.rating ? "#FACC15" : "none"}
            />
          ))}
        </div>
        <p className="font-bold text-gray-900 mt-2">₦{product.price.toLocaleString()}</p>
        <p className="text-gray-500 text-sm flex items-center">
          <MapPin size={14} className="mr-1" />
          {product.location}
        </p>
      </div>
    </div>
  );
};

const ProductSection = () => {
  return (
    <div className="container mx-auto px-4 mt-10">
      <h2 className="text-2xl font-bold">
        Newly Uploaded <span className="text-green-500">Deals</span>
      </h2>
      <p className="text-gray-500">Don’t wait. Check it out, maybe it’s what you need.</p>

      <div className="d-flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
