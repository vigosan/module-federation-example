import React from "react";

function Welcome() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <svg
        className="w-full h-64 text-gray-200 bg-white border-2 border-gray-300 border-dashed"
        preserveAspectRatio="none"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path
          vectorEffect="non-scaling-stroke"
          strokeWidth="2"
          d="M0 0l200 200M0 200L200 0"
        ></path>
      </svg>
    </div>
  );
}

export default Welcome;
