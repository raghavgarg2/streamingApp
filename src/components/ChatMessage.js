import React from "react";
import { user_Icon } from "./utils/Constants";

const ChatMessage = ({ data }) => {
  const { name, message } = data;
  return (
    <div className="flex">
      <img className="w-12" src={user_Icon} />
      <span className="font-bold m-2">{name}</span>
      <span className="m-2"> {message}</span>
    </div>
  );
};

export default ChatMessage;
