import React, { useState, useEffect } from "react";
import "./Youtube.css";

function Youtube() {
  const [youTubeVideos, setVideo] = useState([]);

  // const apikey = process.env.API_KEY;

  useEffect(() => {
    fetch(
      // `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.REACT_APP_CHANNEL_ID}&maxResults=9&order=date&key=${process.env.REACT_APP_API_KEY}`
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyCawXe0GoCKpxEajAB8AHqK3hmTZtb8Z2s"
    )
      .then((response) => response.json())
      .then((data) => {
        const youTubeVideosData = data.items;

        setVideo(youTubeVideosData);
      });
  }, []);

  console.log(youTubeVideos);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>
          {youTubeVideos.map((singleVideo, i) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
              <div key={i} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </div>
  );
}

export default Youtube;
