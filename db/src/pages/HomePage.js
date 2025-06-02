import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./HomePage.css";

import MyProfile from "./pages/MyProfile";
import AddFriends from "./pages/AddFriends";
import Wardrobe from "./pages/Wardrobe";
import MySaved from "./pages/MySaved";
import Upload from "./pages/Upload";
import Calendar from "./pages/Calendar";
import SignIn from "./pages/SignIn";
import Swiping from "./pages/swiping";


const Home = () => (
    <div>
        <h1>Welcome to StyleSwipe</h1>
        <h2>Just swipe, style, and go!</h2>
    </div>
);

const HomePage = () => {
    return (
            <div className="container">
                <div className="top-bar">
                    <Link to="/profile" className="tab">My Profile</Link>
                    <Link to="/add-friends" className="tab">Add Friends</Link>
                    <Link to="/signin" className="tab">Sign In</Link>
                </div>

                <div className="bottom-bar">
                    <Link to="/" className="tab">Home</Link>
                    <Link to="/wardrobe" className="tab">Wardrobe</Link>
                    <Link to="/saved" className="tab">My Saved</Link>
                    <Link to="/upload" className="tab">Upload</Link>
                    <Link to="/calendar" className="tab">Calendar</Link>
                    <Link to="/swiping" className="tab">Swiping</Link>

                </div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<MyProfile />} />
                    <Route path="/add-friends" element={<AddFriends />} />
                    <Route path="/wardrobe" element={<Wardrobe />} />
                    <Route path="/saved" element={<MySaved />} />
                    <Route path="/upload" element={<Upload />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/swiping" element={<Swiping />} />

                </Routes>
            </div> 
    );
};

export default HomePage;