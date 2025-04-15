import './App.css';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import UploadProduct from './Pages/UploadProduct';
import Profile from './Pages/profile/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import MyProduct from './Pages/MyProducts/MyProduct';
function App() {
  const userId = localStorage.getItem('ElectroUserID')

  
  return (
    <div>
      <Router> {/* Wrap everything inside Router */}
      <>
        {/* Bootstrap CSS */}
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
          crossOrigin="anonymous" 
        />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.0/dist/tailwind.min.css" rel="stylesheet"/>

        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.17.2/dist/sweetalert2.all.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.7.32/dist/sweetalert2.all.min.js"></script>
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/upload" element={<UploadProduct userId={userId}/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myProducts" element={<MyProduct userId={userId}/>} />
        </Routes>
      </>
    </Router>
    <ToastContainer />
    </div>
    
  );
}

export default App;
