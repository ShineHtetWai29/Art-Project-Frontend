import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import background from "../../images/image1.jpg";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router";

const EmailValidatinForm = (props) => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const EmailValidateHandler = (e) => {
    e.preventDefault();
    
    const apiUrl = `http://localhost:8080/users/verify`;
    axios
      .post(apiUrl,{mail: email})
      .then((response) => {
        navigate("/validateOtp");
        console.log(response.data.data);
        console.log(response.data.data.id)
        sessionStorage.setItem('email', JSON.stringify( response.data.data.mail))
        sessionStorage.setItem("id", JSON.stringify(response.data.data.id))

      })
      .catch((error) => {
        console.log(error);
      });
    
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div
      className="font-muli flex items-center h-[700px]  justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="max-w-md w-full space-y-8 bg-[#ffffffa6] p-8 rounded-lg my-8">
        <div>
          <h2 className="text-center text-2xl font-extrabold text-gray-900">
            Please Enter Your Email
          </h2>
        </div>
        <form
          className="mt-8 space-y-6"
          action=""
          method="POST"
          onSubmit={EmailValidateHandler}
        >
          <input type="hidden" name="remember" required value="true" />
          <div className="flex flex-col gap-5 rounded-md shadow-sm -space-y-px">
            <div class="relative">
              <input
                type="text"
                class="border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full"
                placeholder="Enter Your Email"
                onChange={emailHandler}
              />
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdEmail />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-black bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              ENTER
            </button>
          </div>
          <div id="signUpBox">
            Don't have an account?{" "}
            <a
              onClick={() => navigate("/signup")}
              href="/signup"
              id="signUpLink"
            >
              Sign Up
            </a>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
};

EmailValidatinForm.propTypes = {};

export default EmailValidatinForm;
