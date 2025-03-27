import React, { useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./reg.css";
import VendorForm from "../../Components/vendorForm/VendorForm";

const Register = () => {
  

  return (
    <div>
      <Navbar />
      <div className="mx-auto col-md-5 border rounded p-1 mt-2">
        <div className="d-flex justify-content-center gap-2 border-bottom p-1">
          <button className="btn fw-bold" style={{ border: "1px solid #0DC029", width: "150px", height: "45px", color: "#0DC029" }}>
            Vendor
          </button>
          <div className="line bg-secondary" style={{ width: "1px" }}></div>
          <button className="btn text-white fw-bold" style={{ backgroundColor: "#0DC029", width: "150px", height: "45px" }}>
            Buyer
          </button>
        </div>


        <VendorForm/>
        
      </div>
    </div>
  );
};

export default Register;
