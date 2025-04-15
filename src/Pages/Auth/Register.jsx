import React, { useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import "./reg.css";
import VendorForm from "../../Components/vendorForm/VendorForm";
import BuyerForm from "../../Components/vendorForm/BuyerForm";

const Register = () => {
  
  const [type, settype] = useState(true)


  const typeStyle={
    backgroundColor:"white",
    border: "1px solid #0DC029",
    color:"#0DC029",
    width: "150px", height: "45px"
  }
  const typeStyle2={
    backgroundColor:"#0DC029",
    border:"none",
    color:"white",
    width: "150px", height: "45px"
  }
  return (
    <div>
      <Navbar />
      <div className="mx-auto col-md-5 border rounded p-1 mt-2">
        <div className="d-flex justify-content-center gap-2 border-bottom p-1">
          <button 
            className="btn fw-bold" 
            style={type?typeStyle2:typeStyle }
            onClick={()=>settype(true)}
          >
            Vendor
          </button>
          <div className="line bg-secondary" style={{ width: "1px" }}></div>
          <button 
            className="btn fw-bold" 
            style={!type?typeStyle2:typeStyle }
            onClick={()=>settype(false)}
          >
            
            Buyer
          </button>
        </div>

        {
          type==true?
          <VendorForm/>
          :<BuyerForm/>
        }
        
      </div>

      <Footer/>
    </div>
  );
};

export default Register;
