import React, { useState } from "react";
import axios from "axios";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import "./reg.css";
import {Link} from 'react-router-dom'
const Login = () => {
  const navigate= useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setloading] = useState(false)
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // FORM VALIDATION
  const validateForm = () => {
    let errors = {};

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // HANDLE FORM SUBMISSION
  const handleSubmit = async (e) => {
    setloading(true)
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post("https://electronics-ecom-back-hyhcgju53-bug-solution.vercel.app/user/login", formData);
      setMessage(response.data.message);
      if(response.data.status){
        localStorage.setItem('ElectroUserID', response.data.user)
        localStorage.setItem('ElectroUserToken', response.data.token)
        navigate('/profile')  
      }
      setloading(false)
    } catch (error) {
      setMessage("Login failed. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="col-md-7 mx-auto mt-5">
        <h5 className="text-center">Login</h5>
        <p className="text-center">
          Get access to your Orders, Wishlist and <br /> Recommendations.
        </p>
        <div className="d-flex">
          <div className="form-box col-md-6 mx-auto col-11 rounded p-4" style={{ border: "1px solid #E9E9E9" }}>
            <form onSubmit={handleSubmit}>
              <span className="text-secondary fw-semibold" style={{ fontSize: "14px" }}>Email Address*</span>
              <input type="text" name="email"
                className="rounded w-100 mt-1 px-2"
                style={{ height: "45px", border: "1px solid #E9E9E9", fontSize: "13px" }}
                placeholder="Enter your email address"
                onChange={handleChange}
              />
              <small className="text-danger">{errors.email}</small>

              <div className="mt-2">
                <span className="text-secondary fw-semibold" style={{ fontSize: "14px" }}>Password*</span>
                <input type="password" name="password"
                  className="rounded w-100 mt-1 px-2"
                  style={{ height: "45px", border: "1px solid #E9E9E9", fontSize: "13px" }}
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
                <small className="text-danger">{errors.password}</small>
              </div>

              <div className="d-flex justify-content-between mt-3">
                <p className="text-secondary" style={{ fontSize: "14px" }}>Create Account?</p>
                <p className="text-secondary" style={{ fontSize: "14px" }}>Forgot Password?</p>
              </div>

              <button className="w-100 btn text-white" style={{ backgroundColor: "#0DC029" }} type="submit">
              {loading?'Loading . . .':'Log In'}
              </button>
              <small className="text-success">{message}</small>
            </form>
          </div>
          <div className="login-img-box col-md-6 d-md-block d-none"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
