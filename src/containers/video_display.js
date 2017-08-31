import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';

class VideoDisplay extends Component {
  render() {
    return (
      <div className="video-display">
        <ReactPlayer
          width="100%"
          controls={true}
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          playing
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { currentvideo: state.currentvideo };
}
export default connect(mapStateToProps, null)(VideoDisplay);
