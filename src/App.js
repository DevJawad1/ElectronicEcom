import './App.css';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import UploadProduct from './Pages/UploadProduct';
import Profile from './Pages/profile/Profile';

function App() {
  return (
    <Router> {/* Wrap everything inside Router */}
      <>
        {/* Bootstrap CSS */}
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
          crossOrigin="anonymous" 
        />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/upload" element={<UploadProduct />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
