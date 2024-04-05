import React, { useState } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import About from "../aboutPage/About";
import Gallery from "../galleryPage/Gallery";
import FeedBack from "../feedbackPage/FeedBack";
import Login from "../loginPage/Login";
import Signup from "../signupPage/Signup";
import Blog from "../blogPage/Blog";
import Home from "../homePage/Home";
import { RiAdminLine } from "react-icons/ri";
import Admin from "../admin/Admin";
import ProductDetail from "../galleryDatail/ProductDatail";
import PaymentForm from "../form/PaymentForm";
import ValidateOtp from "../form/ValidateOtp";
import EmailValidatinForm from "../form/EmailValidatinForm";
import ArtInputForm from "../form/ArtInputForm";
import FavouritePage from "../favouritePage/Favourite";
import Favourite from "../favouritePage/Favourite";
import PaymentSlip from "../form/PaymentSlip";

const Nav = () => {
  return (
    <BrowserRouter>
      <nav className="bg-white border-black border-b-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="navleft ">
            <Link to="/">
              <h1 className="font-robotoSlap text-5xl font-black text-primary">
                ART
              </h1>
            </Link>
          </div>

          {/* dropdown button */}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* navbar list */}
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  style={({ isActive }) => {
                    return {
                      fontSize: isActive ? "24px" : "22px",
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "#99BC851" : "#335",
                    };
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  style={({ isActive }) => {
                    return {
                      fontSize: isActive ? "24px" : "22px",
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "#99BC85" : "#335",
                    };
                  }}
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/gallery"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "                  style={({ isActive }) => {
                    return {
                      fontSize: isActive ? "24px" : "22px",
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "#99BC85" : "#335",
                    };
                  }}
                >
                  {" "}
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/favourite"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "                  style={({ isActive }) => {
                    return {
                      fontSize: isActive ? "24px" : "22px",
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "#99BC85" : "#335",
                    };
                  }}
                >
                  {" "}
                  Favourite
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blog"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  style={({ isActive }) => {
                    return {
                      fontSize: isActive ? "24px" : "22px",
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "#99BC85" : "#335",
                    };
                  }}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/feedback"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  style={({ isActive }) => {
                    return {
                      fontSize: isActive ? "24px" : "22px",
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "#99BC85" : "#335",
                    };
                  }}
                >
                  Feedback
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  style={({ isActive }) => {
                    return {
                      fontSize: isActive ? "24px" : "22px",
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "#99BC85" : "#335",
                    };
                  }}
                >
                  Log In
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  style={({ isActive }) => {
                    return {
                      fontSize: isActive ? "24px" : "22px",
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "#99BC85" : "#335",
                    };
                  }}
                >
                  Sign up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/favourite" element={<Favourite/>}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/galleryDetail/:id" element={<ProductDetail />} />
        <Route path="/payment/:id" element={<PaymentForm />} />
        <Route path="/validateOtp" element={<ValidateOtp />} />
        <Route path="/emailValidate" element={<EmailValidatinForm />} />
        <Route path="/artinputform" element={<ArtInputForm />} />
        <Route path="/paymentslip" element={<PaymentSlip/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Nav;
