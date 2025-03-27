import React, {useState, useEffect} from 'react'

import axios from "axios";
import logo from "../Assets/Img/Logo (3).png";
const VendorForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        businessName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postCode: "",
        country: "",
        region: "",
      });
    
      const [errors, setErrors] = useState({});
      const [message, setMessage] = useState("");
    
      // REGEX PATTERNS
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const nameRegex = /^[a-zA-Z\s]{3,}$/;
      const phoneRegex = /^\d{11}$/;
      const postCodeRegex = /^[a-zA-Z0-9\s\-]{3,10}$/;
    
      // HANDLE INPUT CHANGE
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      // FORM VALIDATION
      const validateForm = () => {
        let errors = {};
    
        if (!nameRegex.test(formData.fullName)) {
          errors.fullName = "Enter a valid full name (min 3 letters)";
        }
        if (!nameRegex.test(formData.businessName)) {
          errors.businessName = "Enter a valid business name (min 3 letters)";
        }
        if (!emailRegex.test(formData.email)) {
          errors.email = "Enter a valid email address";
        }
        if (!phoneRegex.test(formData.phone)) {
          errors.phone = "Phone number must be exactly 11 digits";
        }
        if (!formData.address.trim()) {
          errors.address = "Address is required";
        }
        if (!formData.city.trim()) {
          errors.city = "City is required";
        }
        if (!postCodeRegex.test(formData.postCode)) {
          errors.postCode = "Enter a valid post code (3-10 characters)";
        }
        if (!formData.country.trim()) {
          errors.country = "Country is required";
        }
        if (!formData.region.trim()) {
          errors.region = "Region is required";
        }
    
        setErrors(errors);
        return Object.keys(errors).length === 0;
      };
    
      // HANDLE FORM SUBMISSION
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
    
        try {
          const response = await axios.post("http://localhost:5000/register", formData);
          setMessage(response.data.message);
        } catch (error) {
          setMessage("Registration failed. Please try again.");
        }
      };
  return (
    <div className="mt-2">
          <div className="text-center">
            <img src={logo} alt="logo" className="" />
          </div>
          <form className="form-div mt-4 p-2" onSubmit={handleSubmit}>
            <div className="d-flex flex-wrap">
              {/* Full Name */}
              <div className="col-md-6 px-md-3">
                <span>Full Name*</span><br />
                <input type="text" name="fullName" 
                  className="rounded w-100 mt-1 px-2" 
                  style={{ height: "37px", border: "1px solid #E9E9E9", fontSize: "13px" }} 
                  placeholder="Enter your Full Name" 
                  onChange={handleChange}
                />
                <small className="text-danger">{errors.fullName}</small>
              </div>

              {/* Business Name */}
              <div className="col-md-6 px-md-3">
                <span>Business Name*</span> <br />
                <input type="text" name="businessName" 
                  className="rounded w-100 mt-1 px-2" 
                  style={{ height: "37px", border: "1px solid #E9E9E9", fontSize: "13px" }} 
                  placeholder="Enter your Business Name" 
                  onChange={handleChange}
                />
                <small className="text-danger">{errors.businessName}</small>
              </div>

              {/* Email */}
              <div className="col-md-6 px-md-3 mt-md-4">
                <span>Email*</span><br />
                <input type="text" name="email" 
                  className="rounded w-100 mt-1 px-2" 
                  style={{ height: "37px", border: "1px solid #E9E9E9", fontSize: "13px" }} 
                  placeholder="Enter your Email" 
                  onChange={handleChange}
                />
                <small className="text-danger">{errors.email}</small>
              </div>

              {/* Phone Number */}
              <div className="col-md-6 px-md-3 mt-md-4">
                <span>Phone Number*</span><br />
                <input type="text" name="phone" 
                  className="rounded w-100 mt-1 px-2" 
                  style={{ height: "37px", border: "1px solid #E9E9E9", fontSize: "13px" }} 
                  placeholder="Enter your Phone Number" 
                  onChange={handleChange}
                />
                <small className="text-danger">{errors.phone}</small>
              </div>

              {/* Address */}
              <div className="col-md-12 px-md-3 mt-md-4">
                <span>Address*</span><br />
                <input type="text" name="address" 
                  className="rounded w-100 mt-1 px-2" 
                  style={{ height: "37px", border: "1px solid #E9E9E9", fontSize: "13px" }} 
                  placeholder="Enter your Address" 
                  onChange={handleChange}
                />
                <small className="text-danger">{errors.address}</small>
              </div>

              {/* City */}
              <div className="col-md-6 px-md-3 mt-md-4">
                <span>City*</span><br />
                <input type="text" name="city" 
                  className="rounded w-100 mt-1 px-2" 
                  style={{ height: "37px", border: "1px solid #E9E9E9", fontSize: "13px" }} 
                  placeholder="Enter your City" 
                  onChange={handleChange}
                />
                <small className="text-danger">{errors.city}</small>
              </div>

              {/* Post Code */}
              <div className="col-md-6 px-md-3 mt-md-4">
                <span>Post Code*</span><br />
                <input type="text" name="postCode" 
                  className="rounded w-100 mt-1 px-2" 
                  style={{ height: "37px", border: "1px solid #E9E9E9", fontSize: "13px" }} 
                  placeholder="Enter your Post Code" 
                  onChange={handleChange}
                />
                <small className="text-danger">{errors.postCode}</small>
              </div>

              <div className="col-md-6 px-md-3 mt-md-4">
                <span>Country*</span><br />
                <input type="text" name="country" 
                  className="rounded w-100 mt-1 px-2" 
                  style={{ height: "37px", border: "1px solid #E9E9E9", fontSize: "13px" }} 
                  placeholder="Enter your Post Code" 
                  onChange={handleChange}
                />
                <small className="text-danger">{errors.country}</small>
              </div>

              <div className="col-md-6 px-md-3 mt-md-4">
                <span>Region*</span><br />
                <input type="text" name="region" 
                  className="rounded w-100 mt-1 px-2" 
                  style={{ height: "37px", border: "1px solid #E9E9E9", fontSize: "13px" }} 
                  placeholder="Enter your Post Code" 
                  onChange={handleChange}
                />
                <small className="text-danger">{errors.region}</small>
              </div>
            </div>

            <div className="px-3 mt-3">
              <button className="w-100 btn text-white" style={{ backgroundColor: "#0DC029" }} type="submit">
                Sign Up
              </button>
              <small className="text-success">{message}</small>
            </div>
          </form>
        </div>
  )
}

export default VendorForm