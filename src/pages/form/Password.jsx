import React, { useEffect, useState } from 'react';
import background from "../../images/image1.jpg";
import { useNavigate } from 'react-router';
import axios from 'axios';

const Password = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    id: "",
    password: "",
  });

  // const [userId,setUserId] = useState("");

  useEffect(() => {
    const userId = sessionStorage.getItem("id");
    console.log("User email from sessionStorage:", userId); // Debug log
    setInputData({...inputData, id: userId ? userId.replace(/^"(.*)"$/, '$1') : ""}); // Remove surrounding quotes from userEmail
  }, []);

  // if(userIdFromSession){
  //     setUserId(userIdFromSession);
  // }


  const passwordSubmitHandler = (e) => {
    e.preventDefault();
    
    // if(!userId){
    //     console.log("User Id is null");
    //     return;
    // }

    const apiUrl = `http://localhost:8080/users?id=${inputData.id}`;
    console.log(inputData)
    axios
      .put(apiUrl, { password: inputData.password })
      .then((response) => {
        console.log(response.data);

        if ((response.data.data === true)) {
          navigate("/");
        } 
        else {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const newPasswordHandler = (e) => {
    const passwordWriteData = e.target.value;
    setInputData({ ...inputData, password: passwordWriteData });
  };


  return (
    <div
      className=" font-muli flex items-center h-[700px]  justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >

      <div className="max-w-md w-full space-y-8 bg-[#ffffffa6] p-8 rounded-lg my-8">
        <h2 className="text-center text-2xl font-extrabold text-gray-900">
          Please Create Your Password
        </h2>
        <form
          className="mt-8 space-y-6"
          action=""
          method="POST"
          onSubmit={passwordSubmitHandler}
        >
          <input type="hidden" name="remember" required value="true" />
          <div className="flex flex-col gap-5 rounded-md shadow-sm -space-y-px">
            <div class="relative">
              <input
                type="password"
                class="border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full"
                placeholder="Enter Your New Password"
                onChange={newPasswordHandler}
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
          <div></div>
        </form>
      </div>
    </div>
  );
}

export default Password;
