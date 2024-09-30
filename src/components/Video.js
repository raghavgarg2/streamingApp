import React from "react";

const Video = ({ data }) => {
  // console.log(data);
  const { title, channelTitle } = data?.snippet;
  const { viewCount } = data?.statistics;
  const { url } = data?.snippet?.thumbnails?.high;
  return (
    <div className="m-1 border border-gray-600 w-72">
      <img src={url}></img>
      <h2 className="font-bold max-w">{title}</h2>
      <h4>{channelTitle}</h4>
      <span>{viewCount}</span>
      <span>update date</span>
    </div>
  );
};

export default Video;
