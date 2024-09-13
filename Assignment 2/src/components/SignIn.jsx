import React, { useState } from "react";
import logo from "../../public/InstaGram.png";
import { Link } from "react-router-dom";

function SignIn() {
  const [crediantial, setCrediantial] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(crediantial);
  };
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8   m-4">
      <form className="space-y-6" onClick={(e) => handleSubmit(e)}>
        <img
          src={logo}
          className="h-40 w-32  transition duration-300 ease-in-out mx-auto  "
          alt=""
        />
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium dark:text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 dark:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 "
            placeholder="name@company.com"
            required
            value={crediantial.email}
            onChange={(e) =>
              setCrediantial({ ...crediantial, email: e.target.value })
            }
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium dark:text-gray-900 "
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 dark:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 "
            required
            minLength="8"
            value={crediantial.password}
            onChange={(e) =>
              setCrediantial({ ...crediantial, password: e.target.value })
            }
          />
        </div>

        <div className="flex items-start">
          <div
            to="/forgot-password"
            className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
          >
            Forgot Password?
          </div>
        </div>

        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login to your account
        </button>

        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{" "}
          <Link
            to="/signup"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
