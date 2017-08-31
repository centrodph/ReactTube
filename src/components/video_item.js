import React from 'react';

const VideoItem = ({ video }) => {
  const { title, description, thumbnails } = video.snippet;
  return (
    <div>
      <h4>
        {title}
      </h4>
      <p>
        {description}
      </p>
      <img src={thumbnails.default.url} />
    </div>
  );
};
export default VideoItem;
