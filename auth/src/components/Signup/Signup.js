import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="p-4 rounded-md bg-green-50">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="w-5 h-5 text-green-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">
            Your account has been created successfully.{" "}
            <Link
              to="/auth/signin"
              className="font-medium text-green-900 underline hover:text-green-600"
            >
              Please sign in.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
