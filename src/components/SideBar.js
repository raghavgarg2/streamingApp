import React from "react";

const SideBar = () => {
  return (
    <div className="w-48 border border-gray-500">
      <ul>
        <li>home</li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <h1 className="my-1 py-1 font-bold">you</h1>
      <ul>
        <li>your channel</li>
        <li>History</li>
        <li>Playlist</li>
        <li>your videos</li>
      </ul>
      <h1 className="my-1 py-1 font-bold">Subscription</h1>
      <ul>
        <li>harkirat</li>
        <li>akshay</li>
        <li>tanmay</li>
      </ul>
    </div>
  );
};

export default SideBar;
