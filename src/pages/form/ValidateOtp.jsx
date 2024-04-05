import React, { useState, useEffect } from "react";
import axios from "axios";
import background from "../../images/image1.jpg";
import { useNavigate } from "react-router";

const ValidateOtp = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    email: "",
    otp: ""
  });

  useEffect(() => {
    const userEmail = sessionStorage.getItem("email");
    console.log("User email from sessionStorage:", userEmail); // Debug log
    setInputData({...inputData, email: userEmail ? userEmail.replace(/^"(.*)"$/, '$1') : ""}); // Remove surrounding quotes from userEmail
  }, []);
  


  const otpSubmitHandler = (e) => {
    e.preventDefault();
    const apiUrl = `http://localhost:8080/users/validateOTP`;
    console.log("Submitting OTP:", inputData); // Debug log
    axios
      .post(apiUrl, { mail: inputData.email, otp: inputData.otp })
      .then((response) => {
        console.log("Response data:", response.data);
        if (response.data.data === true) {
          
          navigate("/password");
        } else {
          console.log("Validation failed");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const otpHandler = (e) => {
    setInputData({ ...inputData, otp: e.target.value });
  };

  return (
    <div
      className="font-muli flex items-center h-[700px] justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="max-w-md w-full space-y-8 bg-[#ffffffa6] p-8 rounded-lg my-8">
        <h2 className="text-center text-2xl font-extrabold text-gray-900">
          Please Enter Your OTP
        </h2>
        <form
          className="mt-8 space-y-6"
          action=""
          method="POST"
          onSubmit={otpSubmitHandler}
        >
          <input type="hidden" name="remember" required value="true" />
          <div className="flex flex-col gap-5 rounded-md shadow-sm -space-y-px">
            <div className="relative">
              <input
                type="number"
                className="border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full"
                placeholder="Enter Your OTP Code"
                onChange={otpHandler}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Submit
            </button>
          </div>
          <div id="signUpBox">
            Don't have an account?{" "}
            <a href="/signup" id="signUpLink">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ValidateOtp;
