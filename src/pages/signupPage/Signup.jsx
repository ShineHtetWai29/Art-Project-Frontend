import React, { useState } from 'react';
import background from '../../images/image1.jpg';
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from 'axios';
import { useNavigate } from 'react-router';
import { IoMdImage } from "react-icons/io";


const Signup = () => {
  const navigate = useNavigate()
  const [inputData,setInputData] =useState({
    firstName: "",
    lastName: "",
    mail: "",
    phoneNumber: "",
    password: "",
    profileImage: ""
  })
  const firstNameHandler = (e) =>{
    const fName=e.target.value
    setInputData({...inputData,firstName:fName})
  }
  const lastNameHandler = (e) =>{
    const lName=e.target.value
    setInputData({...inputData,lastName:lName})
  }
  const phoneHandler = (e) =>{
    const phone=e.target.value
    setInputData({...inputData,phoneNumber:phone})
  }
  const emailHandler = (e) =>{
    const email=e.target.value
    setInputData({...inputData,mail:email})
  }
  const passwordHandler = (e) =>{
    const password=e.target.value
    setInputData({...inputData,password:password})
  }
  const imageHandler = (e) =>{
    const image=e.target.value
    setInputData({...inputData,profileImage:image})
  }
  const signUpHandler = (e) =>{
    e.preventDefault()
    console.log(inputData)
    if (!inputData.firstName && !inputData.lastName && !inputData.mail && !inputData.password && !inputData.phone && !inputData.profileImage) {
      alert("Please fill all the fields");
  }
  const apiUrl="http://localhost:8080/users"
  axios
            .post(apiUrl, { firstName: inputData.firstName, lastName: inputData.lastName, mail: inputData.mail,phoneNumber: inputData.phoneNumber,password: inputData.password,profileImage: inputData.profileImage})
            .then((value) => {
                console.log(value);
                window.location.reload();
            });
            navigate('/login');
  }
  return (
    <div className=" flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage:`url(${background})`}}>
      <div className="max-w-md w-full space-y-8 bg-[#ffffffa6] my-8  p-8 rounded-lg ">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Register</h2>
        </div>
        <form className="mt-8 space-y-6" action="" method="POST" onSubmit={signUpHandler}>
          <input type="hidden" name="remember" className='required' value="true"/>
          <div className="flex flex-col gap-5 rounded-md shadow-sm -space-y-px">
            <div className="relative">
              <input type="text" className="border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full" 
              placeholder="FirstName" onChange={firstNameHandler}/>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser />
              </div>
            </div>
            <div className="relative">
              <input type="text" className="border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full" 
              placeholder="LastName" onChange={lastNameHandler}/>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser />
              </div>
            </div>
            <div className="relative">
              <input type="text" className="border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full" 
              placeholder="PhoneNumber" onChange={phoneHandler}/>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaPhoneSquareAlt />
              </div>
            </div>
             <div className="relative">
              <input type="text" className="border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full" 
              placeholder="Email" onChange={emailHandler}/>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">                       
              <MdEmail />
              </div>
            </div>

            <div className="relative">
              <input type="text" className="border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full" 
              placeholder="Password" onChange={passwordHandler}/>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <RiLockPasswordFill />
            
            
              </div>
            </div>
            <div className="relative">
              <input type="text" className="border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full" 
              placeholder="Your ImageUrl" onChange={imageHandler}/>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IoMdImage />

            
            
              </div>
            </div>

          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Sign Up
            </button>
          </div>
             <div id="loginBox">
          Do you have an account?{" "}
          <a href="/login" id="loginLink">
            Login Now
          </a>
        </div>
          <div></div>
        </form>
      </div>
    </div>
  ) 
}

export default Signup