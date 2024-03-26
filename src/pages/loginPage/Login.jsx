import React, { useState } from 'react';
import background from '../../images/image1.jpg'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from 'axios';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate()
  const [validateData, setValidateData] =useState({
    mail: "",
    password: ""
  })
  const emailHandler = (e) => {
    const email = e.target.value
    setValidateData({
   ...validateData,
      mail: email
    })}
    const passwordHandler = (e) => {
      const password = e.target.value
      setValidateData({
     ...validateData,
        password: password
      })}
      const signInHandler = (e) => {
        e.preventDefault()
        console.log(validateData)
        const apiUrl = "http://localhost:8080/users/validate"
        axios
            .post(apiUrl, { mail: validateData.mail, password: validateData.password})
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                  localStorage.setItem('userId', JSON.stringify(response.data.user_id))
                navigate('/'); // or navigate to home page using your preferred routing method
            } else {
                console.log("Validation failed");
                setValidateData({ mail: '', password: '' });
                document.getElementById('mail').value = '';
                document.getElementById('password').value = '';

                navigate('/login');
                
            }})
            .catch((error) => {
              console.error("Validation failed with error:", error);
              // Clear validateData
              setValidateData({ mail: '', password: '' });
              // Handle error message
              // For example, display an error message to the user
              document.getElementById('mail').value = '';
              document.getElementById('password').value = '';
              setError("Failed to validate. Please try again later.");
          });  
      }
  
  return (
    <div className="flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage:`url(${background})`}}>
      <div className="max-w-md w-full space-y-8 bg-[#ffffffa6] p-8 rounded-lg my-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" action="" method="POST" onSubmit={signInHandler}>
          <input type="hidden" name="remember" required value="true"/>
          <div className="flex flex-col gap-5 rounded-md shadow-sm -space-y-px">
            <div class="relative">
              <input type="text" class="border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full" 
              placeholder="Email" onChange={emailHandler}/>
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">          
              <MdEmail />
              </div>
            </div>
            <div class="relative">
              <input type="text" class="border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full" 
              placeholder="Password" onChange={passwordHandler}/>
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <RiLockPasswordFill />            
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
            </div>
          </div>

          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Log in
            </button>
          </div>
             <div id="signUpBox">
          Don't have an account?{" "}
          <a href="/signup" id="signUpLink">
            Sign Up
          </a>
        </div>
          <div></div>
        </form>
      </div>
    </div>
  );
}

export default Login;

