import React from "react";
import { Headset, ShieldCheck, Truck, Wrench } from "lucide-react"; // Lucide icons
import "./Service.css";
import custormer from '../Assets/Img/custormerSupport.png'
import service from '../Assets/Img/Service 24_7-bro 1.png'
import delivery from '../Assets/Img/Free shipping-rafiki 1.png'

const services = [
  { icon: <Headset />, title: "Customer Support" },
  { icon: <ShieldCheck />, title: "24/7 Service" },
  { icon: <Truck />, title: "Fast Delivery" },
  { icon: <Wrench />, title: "24/7 Service" },
];

const Services = () => {
  return (
    <div className="services-container d-md-flex">
      <div className="service-wrapper col-md-3 col-12 px-4" >
          <div className="green " ></div>
          <div className="white "></div>
          <div className="service-card col-11">
            <div className="service-icon">
              <img src={custormer} alt="" />
            </div>
            <h5>Customer Support</h5>
          </div>
        </div>
      <div className="service-wrapper col-md-3 col-12 px-4">
          <div className="green2"></div>
          <div className="white "></div>
          <div className="service-card col-11">
            <div className="service-icon">
              <img src={service} alt="" />
            </div>
            <h5>24/7 Services</h5>
          </div>
        </div>
      <div className="service-wrapper col-md-3 col-12 px-4">
          <div className="green"></div>
          <div className="white "></div>
          <div className="service-card col-11">
            <div className="service-icon">
              <img src={delivery} alt="" />
            </div>
            <h5>Fast Delivery</h5>
          </div>
        </div>
      <div className="service-wrapper col-md-3 col-12 px-4">
          <div className="green2"></div>
          <div className="white "></div>
          <div className="service-card col-11">
            <div className="service-icon">
              <img src={service} alt="" />
            </div>
            <h5>24/7 Services</h5>
          </div>
        </div>
    </div>
  );
};

export default Services;
