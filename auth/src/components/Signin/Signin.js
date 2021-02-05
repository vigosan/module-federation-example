import React from "react";
import { Link } from "react-router-dom";

function Signin({ onSignIn }) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex flex-col flex-grow" id="toggleLabel">
        <span className="text-sm font-medium text-gray-900">
          Sign in to your account
        </span>
        <span className="text-sm leading-normal text-gray-500">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="text-gray-900 text-medium hover:text-gray-600">
            Sign up
          </Link>
        </span>
      </span>

      <button
        type="button"
        aria-pressed="false"
        aria-labelledby="toggleLabel"
        className="relative inline-flex flex-shrink-0 h-6 bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={onSignIn}
      >
        <span className="sr-only">Sign me in!</span>
        <span
          aria-hidden="true"
          className="inline-block w-5 h-5 bg-white rounded-full shadow transform ring-0 transition ease-in-out duration-200 translate-x-0"
        ></span>
      </button>
    </div>
  );
}

export default Signin;
