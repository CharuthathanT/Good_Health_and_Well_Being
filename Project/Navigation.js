import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import LoginDoc from './loginDoc';

export default function Navigation() {
  return (
    <>
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <Link style={{fontWeight:"bolder"}} className="navbar-brand" to='/' href="#">
                <img src="https://cdn.pixabay.com/photo/2015/11/12/13/13/heart-care-1040250_1280.jpg"  width="30" height="24" className="d-inline-block align-text-top me-3"/>
                Health
                </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav1">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav1">
                        <ul className="navbar-nav mb-2">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login'  className="nav-link" href="#">Patients Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/LoginDoc' className="nav-link" href="#">Doctors Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
    </nav>
    
    <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/login"element={<Login/>}/>
            <Route path="/LoginDoc"element={<LoginDoc/>}/>
    </Routes>
    </div>
    </>
  )
}
