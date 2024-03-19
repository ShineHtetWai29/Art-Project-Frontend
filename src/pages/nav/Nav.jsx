import React from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import About from "../aboutPage/About";
import Gallery from "../galleryPage/Gallery";
import FeedBack from "../feedbackPage/FeedBack";
import Login from "../loginPage/Login";
import Signup from "../signupPage/Signup";
import Blog from "../blogPage/Blog";
import Home from "../homePage/Home";

const Nav = () => {
  return (
    <BrowserRouter>
      <nav className="max-w-screen-full flex flex-wrap justify-between p-4 h-[70px] border-b-4 border-">
        <div className="navleft">
          <Link to="/">
            <img className="logo" src="" alt="logo" />
          </Link>
        </div>
        <div className="max-w-full flex gap-12 pr-12 text-[20px]">
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#335" : "",
              };
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#335" : "",
              };
            }}
          >
            AboutUs
          </NavLink>
          <NavLink
            to="/gallery"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#335" : "",
              };
            }}
          >
            {" "}
            Gallery
          </NavLink>
          <NavLink
            to="/blog"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#335" : "",
              };
            }}
          >
            Blog
          </NavLink>
          <NavLink
            to="/feedback"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#335" : "",
              };
            }}
          >
            Feedback
          </NavLink>
          <NavLink
            to="/login"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#335" : "",
              };
            }}
          >
            Log in
          </NavLink>
          <NavLink
            to="/signup"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#335" : "",
              };
            }}
          >
            Sign up
          </NavLink>
          
          
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/feedback" element={<FeedBack/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Nav;
