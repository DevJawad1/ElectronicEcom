import React from 'react'

import { useNavigate } from 'react-router-dom'

import './Navbar.css'
import logo from '../Assets/Img/Logo (3).png'

import {Link} from 'react-router-dom'
export const Navbar = () => {




  return (

    <div> 
      <div className='headerOne'>
         
      </div>
      <div className='headerTwo'>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img className="w-50 mx-5" src={logo} alt="" />
            </a>
            
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <input class="form-control me-2 w-ful" type="search" placeholder="Search" aria-label="Search" />
              </ul>
              <form class="d-flex" role="search">
                
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className='headerThree'>
      <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid  bro px-3">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item mx-3">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item dropdown mx-3">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown mx-3">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Product
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item mx-3">
                  <a class="nav-link active" aria-current="page" href="#">Nearby Vendor</a>
                </li>
                <li class="nav-item mx-3">
                  <a class="nav-link active" aria-current="page" href="#">Support</a>
                </li>
                <li class="nav-item mx-3">
                  <a class="nav-link active" aria-current="page" href="#">About</a>
                </li>
              </ul>
             
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
