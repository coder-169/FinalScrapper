"use client";
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
const Credit = () => {
  const [showCredit, setShowCredit] = React.useState(false);

  return (
    <div>
      {showCredit ? (
        <XMarkIcon className="block h-6 w-6" />
      ) : (
        <button
          onClick={() => setShowCredit(!showCredit)}
          className="fixed left-0 top-1/3 font-bold bg-white shadow-xl rounded-tr-full rounded-br-full p-1 w-12 h-12 flex justify-center items-center"
        >
          $
        </button>
      )}
      {showCredit && (
        <div className="slide-in-left fixed left-0 top-32 bg-white p-4 h-max shadow-lg rounded-lg md:w-[23%] flex flex-col items-start">
          <button onClick={() => setShowCredit(!showCredit)}>
            {showCredit ? <XMarkIcon className="block h-6 w-6" /> : "$"}
          </button>
          <div className=" w-full lg:py-6 mb-6 lg:mb-0">
            <div className="flex mb-4">
              <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                Credit History
              </a>
            </div>
            <div className="flex py-2">
              <span className="text-gray-500">Your balance</span>
              <span className="ml-auto text-gray-900">595 credits</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Base price</span>
              <span className="ml-auto text-gray-900">
                0 credits total
                <br />
                <small className="text-xs -mt-2">50 credits per line</small>
              </span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Options</span>
              <span className="ml-auto text-gray-900">0 credits</span>
            </div>
            <div className="flex">
              <h3 className="flex mr-auto text-indigo-500 border-0 py-2 p rounded">
                Total credits
              </h3>

              <span className="title-font font-medium text-2xl text-gray-900">
                $0.00
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Credit;
