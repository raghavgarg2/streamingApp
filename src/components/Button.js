import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-gray-200 m-4 rounded-full w-24 h-10">{name}</button>
  );
};

export default Button;
