import React from "react";

function Stats() {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 leading-6">
        Last 30 days
      </h3>
      <dl className="mt-5 overflow-hidden bg-white rounded-lg shadow grid grid-cols-1 divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
        <div>
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900">
              Total Paid
            </dt>
            <dd className="flex items-baseline justify-between mt-1 md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                71,897
                <span className="ml-2 text-sm font-medium text-gray-500">
                  from 70,946
                </span>
              </div>

              <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                <svg
                  className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Increased by</span>
                12%
              </div>
            </dd>
          </div>
        </div>

        <div>
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900">
              Avg. Open Rate
            </dt>
            <dd className="flex items-baseline justify-between mt-1 md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                58.16%
                <span className="ml-2 text-sm font-medium text-gray-500">
                  from 56.14%
                </span>
              </div>

              <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                <svg
                  className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Increased by</span>
                2.02%
              </div>
            </dd>
          </div>
        </div>

        <div>
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900">
              Avg. Click Rate
            </dt>
            <dd className="flex items-baseline justify-between mt-1 md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                24.57%
                <span className="ml-2 text-sm font-medium text-gray-500">
                  from 28.62%
                </span>
              </div>

              <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0">
                <svg
                  className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Decreased by</span>
                4.05%
              </div>
            </dd>
          </div>
        </div>
      </dl>
    </div>
  );
}

export default Stats;
