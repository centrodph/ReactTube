import React from 'react';
// <p>
//   {description}
// </p>
const VideoItem = ({ video }) => {
  const { title, description, thumbnails } = video.snippet;
  return (
    <div>
      <h6>
        {title}
      </h6>

      <img src={thumbnails.default.url} />
    </div>
  );
};
export default VideoItem;
