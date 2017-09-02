import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';

class VideoDisplay extends Component {
  getYoutubeURL() {
    let videoId = 'kJQP7kiw5Fk'; //default
    if (this.props.selectedVideo) {
      videoId = this.props.selectedVideo.id.videoId;
    }
    return `https://www.youtube.com/watch?v=${videoId}`;
  }
  render() {
    return (
      <div className="video-display">
        <ReactPlayer
          width="100%"
          controls={true}
          url={this.getYoutubeURL()}
          playing
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { selectedVideo: state.selectedVideo };
}
export default connect(mapStateToProps, null)(VideoDisplay);
