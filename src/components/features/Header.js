import React, { useState } from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from "./Home";

import Event from "./Event";

import "./Header.css";
import "./Home.css";
import "./../../App.css";
import Campustoday from "./Campustoday";
import { Acad } from "./Acad";


////Testing firebse





function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className="Navbar">
        <div className="Head">
          <span className="nav-logo">ALUplanner</span>
          <div className={`nav-items ${isOpen && "open"}`}>
            <Link to="/" className="a">
              Home
            </Link>
            <Link to="./Event" className="a">
              Events
            </Link>
            <Link to="/Campustoday" className="a">
              Campus today
            </Link>
            <Link to="/Acad" className="a">
              Acad Deadlines
            </Link>
            <Link to="/acad-sessions" className="a">
              Acad Sessions
            </Link>
          </div>

          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>

        </div>
        
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/Campustoday" element={<Campustoday />} />
          <Route path="/Acad" element={<Acad />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Header;