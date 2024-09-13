import React, { useState } from "react";
import logo from "../../public/InstaGram.png";
import { Link } from "react-router-dom";
function Signup() {
  const [crediantial, setCrediantial] = useState({
    email: "",
    name: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(crediantial);
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8   m-4">
        <form className="space-y-6" onClick={(e) => handleSubmit(e)}>
          <img
            src={logo}
            className="h-48 w-32   transition duration-300 ease-in-out mx-auto  "
            alt=""
          />
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium dark:text-gray-900 "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 dark:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@company.com"
              required
              value={crediantial.email}
              onChange={(e) =>
                setCrediantial({ ...crediantial, email: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 dark:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="user name"
              required
              value={crediantial.name}
              onChange={(e) =>
                setCrediantial({ ...crediantial, name: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your password
            </label>
            <input
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 dark:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              minLength="8"
              placeholder="••••••••"
              required
              value={crediantial.password}
              onChange={(e) =>
                setCrediantial({ ...crediantial, password: e.target.value })
              }
            />
          </div>
          <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Sign Up
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300 ">
            Alerady have an account?{" "}
            <Link
              to="/signin"
              className="text-blue-700 hover:underline dark:text-blue-500 "
            >
              Sign In
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            By signing up, you agree to our Terms, Data Policy, and Cookies
            Policy.
          </p>
        </form>
      </div>
    </>
  );
}

export default Signup;
