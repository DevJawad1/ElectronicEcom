// import React from 'react'
// import PgIndicator from '../Components/pageIndicator/PgIndicator'
// import { Navbar } from '../Components/Navbar/Navbar'
// import './upload.css'
// const UploadProduct = () => {
//   return (
//     <div>
//         <Navbar />
//         <div className="mt-2 mx-5">
//             <PgIndicator pgName={"Upload Product"}/>
//         </div>

//         <div className="d-flex">

//         <div className="upload-box mt-4 pt-3 px-5 col-md-6">
//             <h6 className='fs-4'><span className='text-secondary'>Upload</span> <span style={{color:"#0DC029"}}>Products/Items</span></h6>
//             <div className="p-3 img-box px-4">
//                 <h6 className='' style={{color:"#4B5966"}}>Product Image</h6>
//                 <div className="p-1 inp rounded d-flex align-items-center justify-content-center" style={{height:"65vh", width:"39vw", }}>
//                     <button className='btn shadow fs-5 w-50 text-white fw-semibold' style={{backgroundColor:"#0DC029"}}>Upload Product Images</button>
//                 </div>

//                 <h6 className='mt-4 pt-1' style={{color:"#4B5966"}}>Product Name</h6>
//                 <input type="text" name="" className='col-12 inp rounded' />

//                 <h6 className='mt-4 pt-1' style={{color:"#4B5966"}}>Product Price</h6>
//                 <input type="text" name="" className='col-12 inp rounded' />

//                 <h6 className='mt-4 pt-1' style={{color:"#4B5966"}}>Details</h6>
//                 <input type="text" name="" className='col-12 inp rounded' />
//             </div>
//         </div>

//         <div className="col-md-6 mt-4 pt-5">
//             <div className="d-flex">
//                 <div className='w-100'>
//                     <h6>Product Image 1</h6>
//                     <div className="p-1 imgs inp rounded d-flex align-items-center justify-content-center col-11" style={{height:"180px",}}>
//                         <button className='btn shadow w-50 text-white fw-semibold' style={{backgroundColor:"#0DC029"}}>Image One</button>
//                     </div>
//                 </div>
//                 <div className='w-100'>
//                     <h6>Product Image 2</h6>
//                     <div className="p-1 imgs inp rounded d-flex align-items-center justify-content-center col-11" style={{height:"180px",}}>
//                         <button className='btn shadow w-50 text-white fw-semibold' style={{backgroundColor:"#0DC029"}}>Image Two</button>
//                     </div>
//                 </div>
//             </div>
//             <h6 className='mt-4' style={{color:"#4B5966"}}>Description</h6>
//             <div className="p-1 imgs rounded d-flex align-items-center justify-content-center" style={{height:"65vh", width:"47.5vw", }}>
//                 <button className='btn shadow fs-5 w-50 text-white fw-semibold' style={{backgroundColor:"#0DC029"}}>Upload Product Images</button>
//             </div>
//             <div className="text-center mt-3">
//                 <button className='col-10 btn text-white' style={{backgroundColor:"#0DC029", height:"50px"}}>Upload</button>
//             </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default UploadProduct


import React, { useState } from 'react';
import axios from 'axios';
import PgIndicator from '../Components/pageIndicator/PgIndicator';
import { Navbar } from '../Components/Navbar/Navbar';
import './upload.css';
import { Loader2Icon, Trash, Trash2 } from 'lucide-react';
import './upload.css'
import { toast } from 'react-toastify';
import FullPageLoader from '../Components/Loader/FullLoader';
const UploadProduct = ({ userId }) => {
  const [images, setImages] = useState([]);
  const [multipleImgArray, setmultipleImgArray] = useState([]);
  const [name, setName] = useState('');
  const [produtPrice, setProductPrice] = useState('');
  const [productQuant, setProductQuant] = useState('');
  const [productcategory, setProductCategory] = useState('');
  const [content, setContent] = useState('');
  const [userStore, setUserStore] = useState('Sample User');
  const [userImg, setUserImg] = useState('https://via.placeholder.com/150');
  const [address, setaddress] = useState('')
  const [brand, setbrand] = useState('')
  const [localImgs, setLocalImgs] = useState([])
  const [majorName, setmajorName] = useState('')
  const [loading, setloading] = useState({state:false, type:"img"})
  const handleImageUpload = (e) => {
    const files = e.target.files;
    setloading({state:true, type:"img"})
    if (files.length > 0) {
      console.log(files)
      const newImages = [];
      const localpic= []
      let completedRequests = 0;
      
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          axios.post('https://konetbe.vercel.app/user/saveimg', { imagename: event.target.result })
            .then((res) => {
              newImages.push(res.data.myimage);
              completedRequests++;
              if (completedRequests === files.length) {
                setmultipleImgArray((prev) => [...prev, ...newImages]);
              }
              console.log(multipleImgArray)
              setloading({state:false, type:"img"})
            })
            .catch((err) => {
              console.log(err);
              completedRequests++;
              setloading({state:false, type:"img"})
            });
        };
        reader.readAsDataURL(file);
      });

      // Show preview images
      const imageUrls = Array.from(files).map(file => URL.createObjectURL(file));
      setImages(imageUrls);
      console.log(imageUrls)
    }
  };

  const clickInp = () => {
    document.getElementById('imageUpload').click();
  };


  const uploadPrd = async () => {
    setloading({state:true, type:"prd"})
    const productDetails = {
      owner: userId,
      brand:brand,
      productTit: name,
      majorName,
      image: multipleImgArray,
      price: Number(produtPrice),
      quantity: Number(productQuant),
      category: productcategory,
      wishlist: 0,
      date: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
      discount: 10,
      cont: content,
      sales: 0,
      advert: "",
      address:address,
      rating:0,
    };
    try {
      const response = await axios.post('https://electrobackend-dbup.onrender.com/user/uploadproduct', productDetails)
      if (response.data.success) {
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
      }
      setloading({state:false, type:"prd"})
    } catch (error) {
      console.log(error)
      setloading({state:false, type:"prd"})
      toast.error('Error occured. Re-upload Image')
    }
  }

  const deleteImg = async (src, i) => {
    try {
      const response = await axios.post('http://localhost:2500/user/deleteImg', { img: src })
      if (response.data.success) {
        setmultipleImgArray(multipleImgArray.splice(i, 1))
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
        // Swal.fire({
        //   position: "top-end",
        //   icon: "success",
        //   title: "Your work has been saved",
        //   showConfirmButton: false,
        //   timer: 1500
        // });
      }
    } catch (error) {

    }
  }
  return (
    <div>
      <Navbar />
      {loading.state && loading.type=="prd" && <FullPageLoader msg={'Uploading Your Product'}/>}
      <div className="mt-2 mx-md-5">
        <PgIndicator pgName={"Upload Product"} />
      </div>
      <div className="d-md-flex c">
        <div className="upload-box mt-4 pt-3 px-md-5 px-2 col-md-6">
          <h6 className='fs-4'><span className='text-secondary'>Upload</span> <span style={{ color: "#0DC029" }}>Products/Items</span></h6>
          <div className="p-3 img-box px-md-4">
            <div className="">
              <h6 style={{ color: "#4B5966" }}>Product Image</h6>
              <button className='btn w-50 text-white fw-semibold' style={{ backgroundColor: "#0DC029", marginBottom: "10px" }} onClick={clickInp}>Add Image</button>
              <input type="file" multiple accept="image/*" onChange={handleImageUpload} className='d-none' id="imageUpload" />
              <div className={`p-1 inp rounded img-box-holder justify-content-${multipleImgArray.length == 0 ? "center align-items-center d-flex" : null}`}>
                
                {
                
                multipleImgArray.length > 0 ?
                  <div className='w-100 h-100 multipleImgBox' style={{ backgroundImage: `url(${multipleImgArray[0]})` }}>
                    <button onClick={() => { deleteImg(multipleImgArray[0], 0) }} className=' border border-0 shadow' style={{ height: "", paddingTop: "" }}>
                      <Trash2 size={15} />
                    </button>
                  </div>
                  : 
                  loading.state && loading.type=="img"?
                  <Loader2Icon style={{color:"#0DC029"}}/>:
                  (
                    <button className='btn shadow fs-5 w-50 text-white fw-semibold' style={{ backgroundColor: "#0DC029" }} onClick={clickInp}>Upload Product Images</button>
                  )}
              </div>

              <div>
                {multipleImgArray.length>0 && <h6 className='border-bottom mt-3'>Gallery Image</h6>}
                <div className="d-flex flex-wrap">
                  {

                    multipleImgArray.map((pic, i) => (
                      <div className='col-md-4 col-6 px-1'>
                        <h6>Product Image {i+1}</h6>
                        <div className="p-1 gal-imgs inp rounded d-flex align-items-center justify-content-center col-12" style={{ height: "180px", backgroundImage:`url(${pic})` }}>
                        </div>
                      </div>

                    ))

                  }
                </div>
              </div>
            </div>

            {/* <input type="text" value={productcategory} onChange={(e) => setProductCategory(e.target.value)} className='col-12 inp rounded px-2' /> */}
          </div>
        </div>
        <div className="col-md-6 mt-md-5 pt-md-5 details-box p-3 mt-3 p-md-0">
          <h6 className="border-bottom" style={{height:"30px"}}>Product Details</h6>
          <h6 className='mt-4 pt-1' style={{ color: "#4B5966" }}>Product Brand</h6>
          <input type="text" placeholder='Optional, note this will be unknown to the buyers' value={brand} onChange={(e) => setbrand(e.target.value)} className='col-md-11 col-12 inp rounded px-2' />
          <h6 className='mt-4 pt-1' style={{ color: "#4B5966" }}>Product Name</h6>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='' className='col-md-11 col-12 inp rounded px-2' />
          <h6 className='mt-4 pt-1' style={{ color: "#4B5966" }}>Product Major Name</h6>
          <input type="text" value={majorName} onChange={(e) => setmajorName(e.target.value)} placeholder='Only the major name of the product, e.g TV, Bag, Laptop. these are major names' className='col-md-11 col-12 inp rounded px-2' />
          
          <h6 className='mt-4 pt-1' style={{ color: "#4B5966" }}>Product Price</h6>
          <input type="number" value={produtPrice} onChange={(e) => setProductPrice(e.target.value)} className='col-md-11 col-12 inp rounded px-2' />
          <h6 className='mt-4 pt-1' style={{ color: "#4B5966" }}>Quantity</h6>
          <input type="number" value={productQuant} onChange={(e) => setProductQuant(e.target.value)} placeholder='How many do you have in your store' className='col-12 col-md-11 inp rounded px-2' />
          <h6 className='mt-4 pt-1' style={{ color: "#4B5966" }}>Category</h6>
          <select
            value={productcategory}
            onChange={(e) => setProductCategory(e.target.value)}
            className="col-md-11 col-12 inp rounded px-2"
          >
            <option value="">Select Category</option>
            <option value="appliances">Home Appliances</option>
            <option value="gadget">Laptops & Phone</option>
            <option value="accessories">Accessories</option>
            <option value="building">Building Equipment</option>
            <option value="others">Others</option>
          </select>

          <h6 className='mt-4 pt-1' style={{ color: "#4B5966" }}>City</h6>
          <input type="text" value={address} onChange={(e) => setaddress(e.target.value)} className='col-12 col-md-11 inp rounded px-2' />


          <div className="">
            <h6 className='mt-md-4 mt-3' style={{ color: "#4B5966" }}>Description and Details</h6>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="p-2 imgs rounded d-flex align-items-center justify-content-center prd-textarea"
              placeholder='Describe the product and also convince your custorme to buy'
            ></textarea>
          </div>
          <div className="text-center mt-3">
            <button
              className='col-10 btn text-white'
              style={{ backgroundColor: "#0DC029", height: "50px" }}
              onClick={uploadPrd}
            >
              Upload Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadProduct;
