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
      <p>
        {description}
      </p>
      <img alt={title} src={thumbnails.default.url} />
    </div>
  );
};
export default VideoItem;
