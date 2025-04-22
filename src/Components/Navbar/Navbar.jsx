// import React from 'react'

// import { useNavigate } from 'react-router-dom'

// import './Navbar.css'
// import logo from '../Assets/Img/Logo (3).png'

// import { Link } from 'react-router-dom'
// export const Navbar = () => {




//   return (

//     <div>
//       <div className='headerOne'>

//       </div>
//       <div className='headerTwo'>
//         <nav class="navbar navbar-expand-lg bg-light">
//           <div class="container-fluid">
//             <a class="navbar-brand" href="#">
//               <img className="w-50 mx-md-5 mx-2" src={logo} alt="" />
//             </a>

//             <div class="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul class="navbar-nav me-auto mb-2 mb-lg-0 bg-white rounded w-ful border">
//                 <input class="w-100 bg-transparent px-2" style={{ outline: "none", border: "none" }} type="search" placeholder="What are you searching for?" aria-label="Search" />
//                 <form class="d-flex m-1" role="search">
//                   <button class="btn text-white" style={{ backgroundColor: "#0DC029" }} type="submit">Search</button>
//                 </form>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//       <div className='headerThree'>
//         <nav class="navbar navbar-expand-lg bg-light">
//           <div class="container-fluid   border px-3">
//             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span class="navbar-toggler-icon"></span>
//             </button>

//             <div class="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
//               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li class="nav-item mx-3">
//                   <a class="nav-link active" aria-current="page" href="#">Home</a>
//                 </li>
//                 <li class="nav-item dropdown mx-3">
//                   <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Categories
//                   </a>
//                   <ul class="dropdown-menu">
//                     <li><a class="dropdown-item" href="#">Action</a></li>
//                     <li><a class="dropdown-item" href="#">Another action</a></li>
//                     <li><a class="dropdown-item" href="#">Something else here</a></li>
//                   </ul>
//                 </li>
//                 <li class="nav-item dropdown mx-3">
//                   <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Product
//                   </a>
//                   <ul class="dropdown-menu">
//                     <li><a class="dropdown-item" href="#">Action</a></li>
//                     <li><a class="dropdown-item" href="#">Another action</a></li>
//                     <li><a class="dropdown-item" href="#">Something else here</a></li>
//                   </ul>
//                 </li>
//                 <li class="nav-item mx-3">
//                   <a class="nav-link active" aria-current="page" href="#">Nearby Vendor</a>
//                 </li>
//                 <li class="nav-item mx-3">
//                   <a class="nav-link active" aria-current="page" href="#">Support</a>
//                 </li>
//                 <li class="nav-item mx-3">
//                   <a class="nav-link active" aria-current="page" href="#">About</a>
//                 </li>
//               </ul>

//             </div>
//           </div>
//         </nav>
//       </div>

//       <nav class="navbar navbar-expand-lg bg-body-tertiary">
//         <div class="container-fluid">
//           <a class="navbar-brand" href="#">
//           <img className="w-50 mx-md-5 mx-2" src={logo} alt="" /> 
//           </a>
//           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div class="navbar-nav">
//               <a class="nav-link active" aria-current="page" href="#">Home</a>
//               <a class="nav-link" href="#">Features</a>
//               <a class="nav-link" href="#">Pricing</a>
//               <a class="nav-link disabled" aria-disabled="true">Disabled</a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }



// import logo from "../Assets/Img/Logo.png"; // Update with your logo path

import React from "react";
import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingBag } from "lucide-react";
import "./Navbar.css";
import logo from '../Assets/Img/Logo (3).png'

export const Navbar = () => {
  return (
    <div className="shadow-sm bg-white position-relative" style={{zIndex:"1"}}>
      <div className='header-one'></div>
    <nav className="navbar navbar-expand-lg navbar-light bg-white ">
      <div className="container-fluid w-100 mx-0 px-2 ">

        {/* Logo & Toggle Button */}
        <div className="d-flex align-items-center justify-content-between col-md-3 col-12">
          <Link className="navbar-brand d-flex px-md-5 align-items-center" to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse " id="navbarNav">
          {/* Search Bar */}
          <div className="search-bar d-flex border border-1 rounded col-md-11" style={{height:"60px"}}>
            <input
              type="text"
              className="w-100 h-100 border border-0 px-2 bg-transparent"
              style={{outline:"none"}}
              placeholder="Search Products..."
            />
            <button className="btn search-btn">
              <Search size={18} />
            </button>
          </div>


          {/* Navigation Links */}
          <div>
            <ul className="navbar-nav mx-auto d-md-none">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Categories</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Electronics</Link></li>
                  <li><Link className="dropdown-item" to="#">Appliances</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Products</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/shop">Shops</Link></li>
                  <li><Link className="dropdown-item" to="/myProducts">My Product</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Nearby Vendor</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Support</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">About</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Icons Section */}
        <div className="nav-icons d-flex mx-2">
          <Link to="/profile" className="nav-icon d-flex gap-1">
            <User size={30} /> <span>Account <br /> <b>LOGIN</b></span>
          </Link>
          <Link to="#" className="nav-icon d-flex gap-1">
            <Heart size={30} /> <span>Wishlist <br /> <b>3-ITEMS</b></span>
          </Link>
          <Link to="#" className="nav-icon d-flex gap-1">
            <ShoppingBag size={30} /> <span>Cart <br /> <b>3-ITEMS</b></span>
          </Link>
        </div>
      </div>
    </nav>


  <div className="col-6 p-4 px-2 mx-auto gap-5 d-none d-md-flex">
  <div className="nav-item">
    <Link className="nav-link" to="/">Home</Link>
  </div>
  
  <div className="nav-item dropdown">
    <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Categories</Link>
    <div className="dropdown-menu">
      <div><Link className="dropdown-item" to="#">Electronics</Link></div>
      <div><Link className="dropdown-item" to="#">Appliances</Link></div>
    </div>
  </div>

  <div className="nav-item dropdown">
    <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Products</Link>
    <div className="dropdown-menu">
      <div><Link className="dropdown-item" to="#">Phones</Link></div>
      <div><Link className="dropdown-item" to="#">Laptops</Link></div>
    </div>
  </div>

  <div className="nav-item">
    <Link className="nav-link" to="#">Nearby Vendor</Link>
  </div>

  <div className="nav-item">
    <Link className="nav-link" to="#">Support</Link>
  </div>

  <div className="nav-item">
    <Link className="nav-link" to="#">About</Link>
  </div>
</div>
    </div>
  );
};


