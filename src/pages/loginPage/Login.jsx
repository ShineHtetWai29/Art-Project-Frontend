import React, { useState } from "react";
import background from "../../images/image1.jpg";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [validateData, setValidateData] = useState({
    mail: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const emailHandler = (e) => {
    setValidateData({ ...validateData, mail: e.target.value });
    
  };

  const passwordHandler = (e) => {
    setValidateData({ ...validateData, password: e.target.value });
   
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setValidateData({ ...validateData, [name]: value });
  };

  const signInHandler = (e) => {
    e.preventDefault();
    const apiUrl = "http://localhost:8080/users/validate";
    axios
      .post(apiUrl, {
        mail: validateData.mail,
        password: validateData.password,
      })
      .then((response) => {
        if (response.status === 200) {
          sessionStorage.setItem(
            "userId",
            JSON.stringify(response.data.user_id)
          );
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Validation failed with error:", error);
        setError("Invalid email or password. Please try again.");
        setValidateData({ email: "", password: "" });
        // window.location.reload();
      });
  };

  return (
    <div
      className="flex items-center h-[] w-full justify-center bg-cover bg-center bg-no-repeat font-muli"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="max-w-md w-full space-y-8 bg-[#ffffffa6] p-8 rounded-lg my-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            LOGIN
          </h2>
        </div>
        <form
          className="mt-8 space-y-6"
          action=""
          method="POST"
          onSubmit={signInHandler}
        >
          <input type="hidden" name="remember" required value="true" />
          <div className="flex flex-col gap-5 rounded-md shadow-sm -space-y-px">
            <div className="relative">
              <input
                type="text"
                className="border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full"
                placeholder="Email"
                onChange={inputHandler}
                name="mail"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdEmail />
              </div>
            </div>
            <div className="relative">
              <input
                type="password"
                className="border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full"
                placeholder="Password"
                name="password"
                onChange={inputHandler}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <RiLockPasswordFill />
              </div>
            </div>
          </div>

          {error && <div className="text-red-500">{error}</div>}

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                onClick={() => navigate("/emailValidate")}
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              LOGIN
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

export default Login;
