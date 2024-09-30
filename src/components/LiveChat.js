import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addChat } from "./utils/chatSlice";
import { generateRandomMessages, generateRandomName } from "./Helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [send, setSend] = useState("");
  const chats = useSelector((store) => store.chat.chats);
  useEffect(() => {
    const timer = setInterval(
      () =>
        dispatch(
          addChat({
            name: generateRandomName(),
            message: generateRandomMessages(30),
          })
        ),

      1000
    );

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <h1 className="font-bold">Live chat</h1>
      <div className="w-full h-[430px] border border-black overflow-y-scroll flex flex-col-reverse ">
        <div>
          {chats.map((chat) => (
            <ChatMessage data={chat} />
          ))}
        </div>
      </div>
      <div>
        <input
          value={send}
          onChange={(e) => {
            setSend(e.target.value);
          }}
          className="w-3/4 border border-black "
        ></input>
        <button
          onClick={() =>
            dispatch(
              addChat({
                name: "raghav",
                message: send,
              })
            )
          }
          className="bg-green-300 w-1/4"
        >
          send
        </button>
      </div>
    </>
  );
};

export default LiveChat;
