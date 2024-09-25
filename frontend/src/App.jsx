import React, { useState, useEffect } from "react";
import "./App.css";
import User from "./Components/User";
import Admin from "./Components/Admin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<User />} /> 
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
