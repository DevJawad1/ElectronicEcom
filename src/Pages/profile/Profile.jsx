"use client"

import { useEffect, useState } from "react"
import { Menu, X, Home, ShoppingBag, ClipboardList, Upload, ChevronDown } from "lucide-react"
import { Navbar } from "../../Components/Navbar/Navbar"
// import { Loader } from "../../Components/Loader/Loader"
import noImg from '../../Components/Assets/Img/noImg.JPG'
import axios from "axios";
import FullPageLoader from "../../Components/Loader/FullLoader"

export default function Profile() {
    // Simple toggle state
    const userId = localStorage.getItem('ElectroUserID')
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [userDetails, setuserDetails] = useState('')
    // Simple toggle function with console log
    function toggleSidebar() {
        console.log("Toggle clicked, current state:", sidebarOpen)
        setSidebarOpen(!sidebarOpen)
    }

    const userProfile= async()=>{
     try {
        console.log(userId)
        const response = await axios.post('https://electrobackend-dbup.onrender.com/user/userprofile', {id:userId})
        console.log(response)
        setuserDetails(response.data.result)
     } catch (error) {
        console.log(error)
     }   
    }

    useEffect(()=>{
        userProfile()
    },[])
    return (
        <div className="">
            <Navbar/>
            {!userDetails && <FullPageLoader msg={'Getting your Information'}/>}
            <div className="d-flex">
                {/* Sidebar */}
                <div
                    className={`sidebar ${sidebarOpen ? "open" : "closed"}`}
                    style={{
                        width: sidebarOpen ? "280px" : "0",
                        minHeight: "100vh",
                        background: "white",
                        borderRight: "1px solid #dee2e6",
                        transition: "width 0.3s ease",
                        overflow: "hidden",
                    }}
                >
                    <div className="p-3">
                        <div className="d-flex align-items-center mb-4">
                            <span className="fs-4 fw-bold text-success me-2">Menu-M</span>
                            {/* <button className="btn btn-sm btn-outline-secondary ms-auto" onClick={toggleSidebar} type="button">
                                <X size={18} />
                            </button> */}
                        </div>
                        <nav className="nav flex-column">
                            <a href="#" className="nav-link d-flex align-items-center text-dark active py-2">
                                <Home className="me-3 text-success" size={20} />
                                <span>Overview</span>
                            </a>
                            <a href="#" className="nav-link d-flex align-items-center text-dark py-2">
                                <ShoppingBag className="me-3 text-success" size={20} />
                                <span>Products</span>
                                <ChevronDown className="ms-auto" size={16} />
                            </a>
                            <a href="#" className="nav-link d-flex align-items-center text-dark py-2">
                                <ClipboardList className="me-3 text-success" size={20} />
                                <span>Orders</span>
                            </a>
                            <a href="#" className="nav-link d-flex align-items-center text-dark py-2">
                                <Upload className="me-3 text-success" size={20} />
                                <span>Upload Items</span>
                            </a>
                        </nav>
                    </div>
                </div>

                {/* Main content */}
                <div
                    className="main-content"
                    style={{
                        flex: "1",
                        transition: "margin-left 0.3s ease",
                        marginLeft: sidebarOpen ? "0" : "0",
                    }}
                >
                    {/* Header */}
                    <header className="d-flex justify-content-between align-items-center p-3 border-bottom bg-white sticky-top">
                        <div className="d-flex align-items-center">
                            <button className="btn btn-sm border border-0 me-3" onClick={toggleSidebar} type="button">
                                <Menu size={25} />
                            </button>
                            <h5 className="mb-0">Welcome back, Menu-M Vendor 1</h5>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="dropdown me-3">
                                <button
                                    className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                >
                                    Today
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Today
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            This Week
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            This Month
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <button className="btn btn-success">Edit Profile</button>
                        </div>
                    </header>

                    {/* Profile content */}
                    <div className="container-fluid py-4">
                        <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: "1rem" }}>
                            <div className="card-body p-4">
                                <div className="row">
                                    <div className="col-md-3 text-center">
                                        <div className="position-relative mx-auto" style={{ width: "180px", height: "180px" }}>
                                            <img
                                                src={noImg}
                                                alt="Profile"
                                                className="rounded-circle bg-light"
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="mb-4">
                                            <div className="text-secondary">Name</div>
                                            <div className="fs-5 fw-bold" style={{textTransform:"uppercase"}}>{userDetails.fullName || 'Loading...'}</div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="text-secondary">Business Name</div>
                                            <div className="fs-5 fw-bold" style={{textTransform:"uppercase"}}>{userDetails.businessName || 'Loading...'}</div>
                                        </div>
                                        <div>
                                            <div className="text-secondary">Office Address</div>
                                            <div className="fs-5 fw-bold" style={{textTransform:"uppercase"}}>{userDetails.address || 'Loading...'}</div>

                                            {/* <div className="fs-5 fw-bold">No. 16, Tanke Complex, Ogbomosho</div> */}
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex justify-content-end mb-2">
                                            <div className="d-flex align-items-center me-4">
                                                <div className="text-success me-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M7 10v12"></path>
                                                        <path d="M15 10v12"></path>
                                                        <path d="M7 3v5h10V3"></path>
                                                        <path d="M7 22h10"></path>
                                                    </svg>
                                                </div>
                                                <div className="fs-4 fw-bold">100</div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="text-danger me-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M7 14v-4"></path>
                                                        <path d="M15 14v-4"></path>
                                                        <path d="M7 22v-3h10v3"></path>
                                                        <path d="M7 5h10"></path>
                                                    </svg>
                                                </div>
                                                <div className="fs-4 fw-bold">0</div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="text-secondary">Number of Trade</div>
                                            <div className="fs-4 fw-bold">110</div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="text-secondary">Trades Success</div>
                                            <div className="fs-4 fw-bold">{userDetails.rate||0}%</div>
                                        </div>
                                        <div>
                                            <div className="text-secondary">Date Joined</div>
                                            <div className="fs-5 fw-bold">2 March, 2025</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats cards */}
                        <div className="row g-4">
                            <div className="col-md-3">
                                <div className="card border-0 shadow-sm">
                                    <div className="card-body p-3">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <div>Revenue</div>
                                            <div className="rounded-circle bg-light p-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <path d="M16 8h-6.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H6"></path>
                                                    <path d="M12 18v2"></path>
                                                    <path d="M12 4v2"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-baseline">
                                            <h3 className="mb-0 me-2">$25K</h3>
                                            <span className="text-success">
                                                +11.01%{" "}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="m6 9 6-6 6 6"></path>
                                                    <path d="M6 12h12"></path>
                                                    <path d="m6 15 6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card border-0 shadow-sm">
                                    <div className="card-body p-3">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <div>Available Items</div>
                                            <div className="rounded-circle bg-light p-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                                                    <path d="M3 6h18"></path>
                                                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-baseline">
                                            <h3 className="mb-0 me-2">367K</h3>
                                            <span className="text-success">
                                                +9.15%{" "}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="m6 9 6-6 6 6"></path>
                                                    <path d="M6 12h12"></path>
                                                    <path d="m6 15 6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card border-0 shadow-sm">
                                    <div className="card-body p-3">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <div>Orders</div>
                                            <div className="rounded-circle bg-light p-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                                    <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-baseline">
                                            <h3 className="mb-0 me-2">56</h3>
                                            <span className="text-danger">
                                                -0.56%{" "}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="m6 9 6-6 6 6"></path>
                                                    <path d="M6 12h12"></path>
                                                    <path d="m6 15 6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card border-0 shadow-sm">
                                    <div className="card-body p-3">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <div>Customers</div>
                                            <div className="rounded-circle bg-light p-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="9" cy="7" r="4"></circle>
                                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-baseline">
                                            <h3 className="mb-0 me-2">239K</h3>
                                            <span className="text-danger">
                                                -1.48%{" "}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="m6 9 6-6 6 6"></path>
                                                    <path d="M6 12h12"></path>
                                                    <path d="m6 15 6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

