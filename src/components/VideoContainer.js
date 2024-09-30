import React, { useEffect, useState } from "react";
import { video_api } from "./utils/Constants";
import Video from "./Video";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);

  const fetchData = async () => {
    const data = await fetch(video_api);
    const json = await data.json();
    // console.log(json);
    setVideoList(json?.items);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap">
      {videoList.map((video) => (
        <Link to={"/watch/" + video.id}>
          <Video key={video.id} data={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
