import React from "react";
import Button from "./Button";

const list = ["all", "harkirat", "akshay", "raghav", "cba", "tmkoc", "beast"];
const ButtonList = () => {
  return (
    <div>
      {list.map((category) => (
        <Button name={category} />
      ))}
    </div>
  );
};

export default ButtonList;
