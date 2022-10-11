import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes
} from "react-router-dom";
import About from "../screens/about";
import Contact from "../screens/contact";
import Home from "../screens/home";
import NotFound from "../screens/notfound";
import Profile from "../screens/profile";
import Services from "../screens/services";

export default function AppRouter() {
    return (
        <Router>
            <div>
                <Link to='/'>Home</Link>
                <Link to='About'>About</Link>
                <Link to='Services'>Services</Link>
                <Link to='Contact'>Contact</Link>
            </div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="about" element={<About/>} />
                <Route path="services" element={<Services/>} />
                <Route path="contact" element={<Contact/>} />
                <Route path="profile" element={<Profile/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    );
};