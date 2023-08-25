import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userAction";
import Loading from "../components/Loading";
import Sucess from "../components/Sucess";
import Error from "../components/Error";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const [emailValidationError, setEmailValidationError] = useState(null);

  const registerstate = useSelector((state) => state.registerUserReducer);

  const { error, loading, success } = registerstate;

  const dispatch = useDispatch();

  //Email validation start
  const handleChange = (event) => {
    console.log(event);
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(event)) {
      setEmailValidationError("Email is invalid");
    } else {
      setEmailValidationError(null);
    }

    setEmail(event);
  };
  //Email validation end

  const register = () => {
    if (username == "") {
      // alert("Please enter your username!!");
      document.getElementById("username").placeholder =
        "Please enter your Username";
      document.getElementById("username").className =
        "placeholder-red-400 h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:borer-rose-600";
    } else if (email == "") {
      document.getElementById("email").placeholder = "Please enter your Email";
      document.getElementById("email").className =
        "placeholder-red-400 h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:borer-rose-600";
    } else if (password == "") {
      document.getElementById("password").placeholder =
        "Please enter your Password";
      document.getElementById("password").className =
        "placeholder-red-400 h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:borer-rose-600";
    } else if (confirmpassword == "") {
      document.getElementById("confirmpassword").placeholder =
        "Please enter confirm password";
      document.getElementById("confirmpassword").className =
        "placeholder-red-400 h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:borer-rose-600";
    } else if (password != confirmpassword) {
      document.getElementById("notmatched").className =
        "text-lg text-red-400 visible h-10  w-full";
    } else {
      document.getElementById("notmatched").className = "hidden";
      const user = {
        username,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  };

  return (
    <div className="min-h-screen py-6 mt-20 mb-36 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-orange-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 w-508">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Create your account</h1>{" "}
              <br />
              {loading && <Loading />}
              {success && <Sucess success="User Registered Successfully" />}
              {error && <Error error="Email already exist!!" />}
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="username"
                    name="username"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:borer-rose-600"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                  <label
                    htmlFor="username"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Username
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="email"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      handleChange(e.target.value);
                    }}
                  />
                  {emailValidationError && (
                    <h2 style={{ color: "red" }}>{emailValidationError}</h2>
                  )}
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="confirmpassword"
                    name="confirm password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                    required
                    value={confirmpassword}
                    onChange={(e) => {
                      setConfirmpassword(e.target.value);
                    }}
                  />
                  <label
                    htmlFor="confirmpassword"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Confirm Password
                  </label>
                </div>
                <div className="relative">
                  <p id="notmatched" className="hidden">
                    Passwords not matched!!
                  </p>
                </div>

                <div className="relative">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="bg-orange-500 text-white rounded-md mt-8 px-2 py-1"
                    onClick={register}
                  >
                    Register
                  </motion.button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-6">
                    Already have an account? {""}
                    <a
                      href="/login"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500 hover:text-orange-500"
                    >
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
