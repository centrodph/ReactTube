import React from 'react';
// <p>
//   {description}
// </p>
const styleImg = {
  maxWidth: '52px',
  position: 'absolute',
  top: '10px',
  left: '10px'
};
const VideoItem = ({ video }) => {
  const { title, thumbnails } = video.snippet;
  return (
    <div>
      <img alt={title} src={thumbnails.default.url} />
      <p className="title">
        {title}
      </p>
    </div>
  );
};
export default VideoItem;
