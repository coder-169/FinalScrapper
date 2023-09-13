import React from "react";

const Loader = ({ text }) => {
  return (
    <div className="text-center my-24">
      <div className="lds-dual-ring"></div>
      <h3 className="text-xl my-2 text-gray-600">{text}</h3>
    </div>
  );
};

export default Loader;
